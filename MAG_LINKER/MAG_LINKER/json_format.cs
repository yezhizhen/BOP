using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;

namespace MAG_LINKER
{
    //For unwanted field, don't include DataMember.
    //http://www.newtonsoft.com/json/help/html/reducingserializedjsonsize.htm
    [DataContract]
    public class Response
    {
        
    }

}
