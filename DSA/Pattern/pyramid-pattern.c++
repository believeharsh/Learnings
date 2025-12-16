#include <iostream>
#include <string>
using namespace std;

// number pyramid pattern ; 
void numbersPyramid() {
    int n = 10 ; 
    for(int i = 1 ; i<= n ; i++) {
        for(int j = 1 ; j <= n - i ; j++){
            cout << ' ' ; 
        }
        for(int j = 1 ; j <= i ; j++) {
            cout << j ; 
        }
        for(int j = 1 ; j < i ; j++){
            cout << j ; 
        }
        cout << endl ; 
    }
}

int main () {
numbersPyramid() ; 
}