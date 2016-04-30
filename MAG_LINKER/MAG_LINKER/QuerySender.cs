using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization.Json;
using System.Net;

namespace MAG_LINKER
{
    static class QuerySender
    {
        public static Entity MakeRequest(string requestUrl)
        {
            try
            {
                HttpWebRequest request = WebRequest.Create(requestUrl) as HttpWebRequest;
                using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                        throw new Exception(String.Format(
                        "Server error (HTTP {0}: {1}).",
                        response.StatusCode,
                        response.StatusDescription));
                    DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(Entity));
                    object objResponse = jsonSerializer.ReadObject(response.GetResponseStream());
                    Entity jsonResponse
                    = objResponse as Entity;
                    return jsonResponse;
                }
            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public static void send_request(string query)
        {

        }


    }
}
