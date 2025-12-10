#include <iostream>
#include <string>
using namespace std;

class person {
public:
    string name;
    int age;

    // Default Constructor
    person() {
        cout << "Parent Constructor Called" << endl;
    }

    // Destructor
    ~person() {
        cout << "Parent Destructor Called" << endl;
    }
};


class student : public person {
public:
    int rollNumber;

    // Child Constructor
    student() {
        cout << "Child Constructor Called" << endl;
    }

    void getinfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Roll Number: " << rollNumber << endl;
    }

    // Child Destructor
    ~student() {
        cout << "Child Destructor Called" << endl;
    }
};


int main() {

    student s1;
    s1.name = "Rahul";
    s1.age = 22;
    s1.rollNumber = 22;

    s1.getinfo();

    return 0;
}
