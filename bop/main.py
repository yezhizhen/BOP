import query
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qsl
import json

port = 80
hostname = "eulervm.chinacloudapp.cn"

class RestServer(BaseHTTPRequestHandler):

    def do_GET(self):
        url = self.path
        que = dict(parse_qsl(urlparse(url).query))
        
        #process the "que"(containing id1, id2) and get the path...
        
        
        
        
        #path is the final value we return
        path = [[int(que["id1"]),int(que["id2"])],[5,6]]
        
        self.send_response(200)
        self.send_header("Content-type", "application/json")	
        self.end_headers()
        
        self.wfile.write(bytes(json.dumps(path),"utf-8"))
        
        return 


'''
url = "https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=Id=2140251882&count=10000&attributes=Id,AA.AuId,AA.AfId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6"

response = query.send_query(url)

print(response)
'''

myserver = HTTPServer(('',port),RestServer)

myserver.serve_forever()
