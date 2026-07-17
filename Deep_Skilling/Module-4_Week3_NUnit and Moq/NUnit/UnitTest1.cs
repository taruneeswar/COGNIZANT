using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void SetUp()
        {
            calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        [TestCase(10, 20, 30)]
        [TestCase(5, 5, 10)]
        [TestCase(7, 3, 10)]
        public void AdditionTest(int a, int b, int expected)
        {
            int result = calculator.Addition(a, b);

            Assert.That(result, Is.EqualTo(expected));
        }
    }
}