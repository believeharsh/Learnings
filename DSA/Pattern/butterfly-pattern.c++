#include <iostream>
#include <string>
using namespace std;

void HollowDimondPattern()
{
    // top part
    int n = 5;
    for (int i = 1; i <= n; i++)
    {

        // spaces
        for (int j = 1; j < n - i; j++)
        {
            cout << " ";
        }
        // start 
        cout << "*";
        if (i != 1)
        // inner spaces 
        {
            for (int j = 1; j <= 2 * i - 1; j++)
            {
                cout << " ";
            }
            // star
            cout << "*"  ; 
        }

        cout << endl ; 
    }
}

int main()
{
}