#include <iostream>
#include <string>
#include <vector>
using namespace std;

void squarePattern(int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            cout << j << " ";
        }
        cout << endl;
    }
}

void charPrint()
{

    vector<string> characters = {"A", "B", "C", "D"};
    int n = characters.size();
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << characters[j] << " ";
        }
        cout << endl;
    }
}

void ABCDPrinter()
{
    int n = 4;
    for (int i = 0; i < n; i++)
    {
        char ch = 'A';
        for (int j = 0; j < n; j++)
        {
            cout << ch;
            ch = ch + 1;
        }
        cout << endl;
    }
}

void numberSquareWithIncresingNumbers()
{
    int n = 3;
    int num = 1;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
}

void chartersSquareWithIncreaseOrder()
{
    char ch = 'A';
    int n = 3;

    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 3; j++)
        {
            cout << ch << " ";
            ch = ch + 1;
        }

        cout << endl;
    }
}
int main()
{
    // squarePattern(4);
    ABCDPrinter();
    // charPrint();
    numberSquareWithIncresingNumbers();
    chartersSquareWithIncreaseOrder();
}