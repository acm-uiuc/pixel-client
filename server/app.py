"""A single common terminal for all websockets.
"""
import tornado.web
# This demo requires tornado_xstatic and XStatic-term.js
import tornado_xstatic

from terminado import TermSocket
from util.common import run_and_show_browser, STATIC_DIR, TEMPLATE_DIR
from handlers.terminal_page_handler import TerminalPageHandler
from handlers.protected_term_manager import ProtectedTermManager

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
