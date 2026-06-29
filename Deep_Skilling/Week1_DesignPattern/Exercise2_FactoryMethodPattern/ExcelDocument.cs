using System;
using System.Collections.Generic;
using System.Text;

namespace CognizantDNS.Design_Patterns_and_Principles.Factory_Method_Pattern
{
    public class ExcelDocument : IDocument
    {
        public void Open()
        {
            Console.WriteLine("Excel Document Opened");
        }
    }
}