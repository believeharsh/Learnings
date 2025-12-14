#include <iostream>
#include <string>
using namespace std;

// triangle pattern
void trianlgePattern()
{
    int n = 50;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "*" << ' ';
        }

        cout << endl;
    }
}

// triangle pattern
void trianlgePatternwithNumbers()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << i << " ";
        }

        cout << endl;
    }
}

int main()
{
    // trianlgePattern() ;
    trianlgePatternwithNumbers();
}