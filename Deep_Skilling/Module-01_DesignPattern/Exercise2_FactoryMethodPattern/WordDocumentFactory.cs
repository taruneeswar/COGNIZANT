using System;
using System.Collections.Generic;
using System.Text;

namespace CognizantDNS.Design_Patterns_and_Principles.Factory_Method_Pattern
{
    public class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }
}