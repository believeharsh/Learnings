#include <iostream>
#include <string>
using namespace std;

class Teacher {
    private: 
    double salary;

    public:
    string name; 
    string depa; 

    Teacher(string name, string depa, double salary) {
        this->name = name ; 
        this->depa = depa ; 
        this->salary = salary ; 
    }

    // our own copy constructor example ; 
    Teacher( Teacher &orgObj ) {
        cout << "Hello I'm the copy constructor...\n";
        this->name = orgObj.name ; 
        this->depa = orgObj.depa;
        this->salary = orgObj.salary;
    }

    void getinfo() {
        cout << "name is " << name << endl; 
        cout << "department is this " << depa << endl ; 
    }
} ; 


int main() {
    Teacher t1("Harsh Dahiya", "computer Science", 50000) ; 
    t1.getinfo() ; 
    
    // copy constructor example 
    Teacher t2(t1) ; 
    t2.getinfo() ; 
}