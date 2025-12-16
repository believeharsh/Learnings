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

// triagle patter with characters 
void trianlgePatternwithchar()
{
    int n = 5;
    char ch = 'A' ; 
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << ch << " ";
        }
        ch = ch + 1 ; 
        cout << endl;
    }
}

// triangle pattern with number with increasing order 
void traianglewithIncreasingNum () {
    int n = 10 ;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j  << ' ';
        }
        
        cout << endl;
    }
}

// triangle with reverse numbers 
void traianglewithReverseNum () {
   int n = 5 ; 
   for(int i = 1 ; i <= 5 ; i++){
     for(int j = i ; j > 0  ; j-- ){
        cout << j << " ";  
     }
     cout << endl ; 
   }
}

int main()
{
    // trianlgePattern() ;
    // trianlgePatternwithNumbers();
    // trianlgePatternwithchar(); 
    // traianglewithIncreasingNum() ; 
    traianglewithReverseNum() ; 
}