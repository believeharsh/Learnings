#include <iostream>
#include <string>
using namespace std;


int main () {
    int age ; 
    cout << "please enter you age" << endl ; 
    cin >> age; 


    if ( age > 19) {
        cout << "Yes you can vote now" ; 
    } else {
        cout << "sorry you can't vote" ; 
    }
}