import urllib.request
import json
def send_query(url):
	return json.loads(urllib.request.urlopen(url).read().decode("utf-8"))
