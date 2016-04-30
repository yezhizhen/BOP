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
        //[DataMember(Name = "expr")]
        //public string expr { get; set; }
        [DataMember(Name = "entities")]
        public entity[] entities { get; set; }
    }
    [DataContract]
    public class entity
    {
        [DataMember(Name = "Id")]
        public long Id { get; set; }
        [DataMember(Name = "AA")]
        public author[] authors { get; set; }
        [DataMember(Name = "F")]
        public field[] fields { get; set; }
        [DataMember(Name = "C")]
        public conference[] conferences { get; set; }
        [DataMember(Name ="J")]
        public journal[] journals { get; set; }
    }

    [DataContract]
    public class author
    {
        [DataMember(Name = "AuN")]
        public string authorname { get; set; }
        [DataMember(Name = "AuId")]
        public long authorid { get; set; }

    }

    [DataContract]
    public class field
    {
        [DataMember(Name = "FId")]
        public long field_id { get; set; }

    }

    [DataContract]
    public class journal
    {
        [DataMember(Name = "Id")]
        public long jid { get; set; }
    }
    [DataContract]
    public class conference
    {
        [DataMember(Name = "Id")]
        long cid;
    }
}
