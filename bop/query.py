import urllib.request
import json


pre_eva = "https://api.projectoxford.ai/academic/v1.0/evaluate?expr="

post_eva = "&attributes=Id,AA.AuId,AA.AfId,RId,F.FId,C.CId,J.JId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6"

def send_query(expr):
	return json.loads(urllib.request.urlopen(pre_eva+url+post_eva).read().decode("utf-8"))
