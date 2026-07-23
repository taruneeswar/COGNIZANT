using System;
using System.Collections.Generic;
using System.Text;

namespace CognizantDNS.Design_Patterns_and_Principles.Factory_Method_Pattern
{
    public class WordDocument : IDocument
    {
        public void Open()
        {
            Console.WriteLine("Word Document Opened");
        }
    }
}