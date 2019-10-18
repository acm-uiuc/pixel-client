"""A single common terminal for all websockets.
"""
import tornado.web
# This demo requires tornado_xstatic and XStatic-term.js
import tornado_xstatic
import uuid
import os
import random
import string

from terminado import TermSocket, SingleTermManager, UniqueTermManager
from common import run_and_show_browser, STATIC_DIR, TEMPLATE_DIR

class TerminalPageHandler(tornado.web.RequestHandler):
    def get(self):
        return self.render("index.html", static=self.static_url,
                           xstatic=self.application.settings['xstatic_url'],
                           ws_url_path="/websocket")

class ProtectedTermManager(UniqueTermManager):
    def __init__(self, **kwargs):
        self.max_terminals = 500
        command = self.user_gen()
        super(UniqueTermManager, self).__init__(shell_command=command, **kwargs)
        self.terminal = None

    def user_gen(self):
        userid = "User"+randomString(28)
        os.system('useradd -m '+userid)

        return ["su", "-l", userid]


def randomString(stringLength=10):
    """Generate a random string of fixed length """
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))

def main(argv):
    term_manager = ProtectedTermManager()
    handlers = [
                (r"/websocket", TermSocket,
                     {'term_manager': term_manager}),
                (r"/", TerminalPageHandler),
                (r"/xstatic/(.*)", tornado_xstatic.XStaticFileHandler,
                     {'allowed_modules': ['termjs']}),
                (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./client"})
               ]
    app = tornado.web.Application(handlers, static_path=STATIC_DIR,
                      template_path=TEMPLATE_DIR,
                      xstatic_url = tornado_xstatic.url_maker('/xstatic/'))
    app.listen(80, '0.0.0.0')
    run_and_show_browser("http://0.0.0.0/", term_manager)

if __name__ == '__main__':
    main([])
