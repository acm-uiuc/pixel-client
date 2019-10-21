import tornado.web
import json
import tempfile
import os

class FileUploadHandler(tornado.web.RequestHandler):
    def post(self):
        userid = self.get_secure_cookie("userid").decode("utf-8")
        body = self.request.body
        file_upload = json.loads(body)
        tmp = tempfile.NamedTemporaryFile()
        tmp.write(str.encode(file_upload["contents"]))
        os.system("./lib/docker cp "+tmp.name+" "+userid+":/user/"+file_upload["name"])
