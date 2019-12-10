import tornado.web
import tornado_xstatic
from util.user_gen import user_gen

class TerminalPageHandler(tornado.web.RequestHandler):
    def get(self):
        uid = user_gen()
        self.set_secure_cookie("userid", uid)
        return self.render("index.html", static=self.static_url,
                           xstatic=self.application.settings['xstatic_url'],
                           ws_url_path="/websocket")
