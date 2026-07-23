using System;

class Program
{
    // Linear Search
    static Product LinearSearch(Product[] products, int targetId)
    {
        foreach (Product product in products)
        {
            if (product.ProductId == targetId)
            {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    static Product BinarySearch(Product[] products, int targetId)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (products[mid].ProductId == targetId)
            {
                return products[mid];
            }

            if (products[mid].ProductId < targetId)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return null;
    }

    static void Main(string[] args)
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int targetId = 104;

        Console.WriteLine("Linear Search:");

        Product result1 = LinearSearch(products, targetId);

        if (result1 != null)
        {
            Console.WriteLine("Found Product: " + result1.ProductName);
        }
        else
        {
            Console.WriteLine("Product Not Found");
        }

        Console.WriteLine();

        Console.WriteLine("Binary Search:");

        Product result2 = BinarySearch(products, targetId);

        if (result2 != null)
        {
            Console.WriteLine("Found Product: " + result2.ProductName);
        }
        else
        {
            Console.WriteLine("Product Not Found");
        }
    }
}