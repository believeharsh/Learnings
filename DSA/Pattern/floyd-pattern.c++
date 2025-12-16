#include <iostream>
#include <string>
using namespace std;

// simple floyd triangle pattern with numbers ;
void floydTrianlgePattern()
{
    int n = 5;
    int num = 1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << num << " ";
            num++;
        }

        cout << endl;
    }
}

// simple inverted floyd triangle;
void InvertedPattern()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << " ";
        }

        for (int j = 1; j <= n - i; j++)
        {
            cout << i;
        }

        cout << endl;
    }
}

// simple inverted floyd triangle of characters ;
void InvertedPatternwithChar()
{
    int n = 5;
    char ch = 'A';
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << " ";
        }

        for (int j = 1; j <= n - i; j++)
        {
            cout << ch;
        }
        ch = ch + 1;
        cout << endl;
    }
}


int main()

{
    // floydTrianlgePattern();
    // InvertedPattern();
    InvertedPatternwithChar();
}