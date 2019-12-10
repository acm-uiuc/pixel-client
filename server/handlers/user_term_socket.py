import tornado.web
# This demo requires tornado_xstatic and XStatic-term.js
import tornado_xstatic

from terminado import TermSocket

class UserTermSocket(TermSocket):
    def open(self, url_component=None):
        super(TermSocket, self).open(url_component)

        self._logger.info("TermSocket.open: %s", url_component)

        url_component = _cast_unicode(url_component)
        self.term_name = url_component or 'tty'
        self.terminal = self.term_manager.get_terminal(self.get_secure_cookie("userid"), url_component)
        for s in self.terminal.read_buffer:
            self.on_pty_read(s)
        self.terminal.clients.append(self)

        self.send_json_message(["setup", {}])
        self._logger.info("TermSocket.open: Opened %s", self.term_name)


def _cast_unicode(s):
    if isinstance(s, bytes):
        return s.decode('utf-8')
    return s
