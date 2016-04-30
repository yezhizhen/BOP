using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MAG_LINKER
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Test
            Response testresponse = QuerySender.MakeRequest(@"https://oxfordhk.azure-api.net/academic/v1.0/evaluate?expr=Id=2140251882&count=10000&attributes=Id,AA.AuId,AA.AfId&subscription-key=f7cc29509a8443c5b3a5e56b0e38b5a6");
            #endregion
            Console.WriteLine(testresponse.expr);
        }
    }
}
