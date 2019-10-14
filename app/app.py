"""A single common terminal for all websockets.
"""
import tornado.web
# This demo requires tornado_xstatic and XStatic-term.js
import tornado_xstatic
import uuid


from terminado import TermSocket, SingleTermManager, UniqueTermManager
from common import run_and_show_browser, STATIC_DIR, TEMPLATE_DIR

class TerminalPageHandler(tornado.web.RequestHandler):
    def get(self):
        return self.render("index.html", static=self.static_url,
                           xstatic=self.application.settings['xstatic_url'],
                           ws_url_path="/websocket")

class ProtectedTermManager(SingleTermManager):
    def __init__(self, **kwargs):
        super(SingleTermManager, self).__init__(shell_command=self.user_gen(), **kwargs)
        self.terminal = None

    def user_gen(self):
        uuid_str = "User"+str(uuid.uuid())

        return ['bash']

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
