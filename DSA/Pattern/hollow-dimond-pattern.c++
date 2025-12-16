#include <iostream>
#include <string>
using namespace std;

void HollowDimondPattern()
{
    int n = 5;
    // top part 
    for (int i = 1; i <= n; i++)
    {
        // spaces
        for (int j = 1; j <= n - i; j++)
        {
            cout << " ";
        }

        // first star
        cout << "*";

        // middle spaces + second star (only if not first row)
        if (i > 1)
        {
            for (int j = 1; j <= 2 * i - 3; j++)
            {
                cout << " ";
            }
            cout << "*";
        }

        cout << endl;
    }

    // bottom part
    for (int i = n - 1; i >= 1; i--)
    {
        // spaces
        for (int j = 1; j <= n - i; j++)
        {
            cout << " ";
        }

        // first star
        cout << "*";

        // middle spaces + second star
        if (i > 1)
        {
            for (int j = 1; j <= 2 * i - 3; j++)
            {
                cout << " ";
            }
            cout << "*";
        }

        cout << endl;
    }
}

int main()
{
    HollowDimondPattern();
}
