import tornado.web
import tornado.ioloop

options = {
    "path": "./dist", 
    "default_filename": "../dist/index.html"
}

if __name__ == "__main__":
    app = tornado.web.Application([tornado.web.url(r"/(.*)", tornado.web.StaticFileHandler, options)])

    app.listen(3000)
    tornado.ioloop.IOLoop.current().start()
