using System;

namespace CognizantDNS.Design_Patterns_and_Principles.Singleton_Pattern
{
    internal class Logger
    {
        private static Logger? instance;

        private Logger()
        {
        }

        public static Logger GetInstance()
        {
            if (instance == null)
            {
                instance = new Logger();
            }

            return instance;
        }

        public void Log(string message)
        {
            Console.WriteLine("Log Message: " + message);
        }
    }
}