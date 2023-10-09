// Online C++ compiler to run C++ program online

#include <iostream>
#include <vector>
#define MAX_N 1000
using namespace std;

int maxOfArray(vector<int>&);

class Solution {
    public: 
    int getCount(vector<int>&);
};

int Solution::getCount(vector<int> &A){
    int count =0;
    int max = maxOfArray(A);
    for (int i=0; i<A.size(); i++){
        if(A[i]<max){
            count++;
        }
    }
    return count;
}

int main() {
    vector<int> a{3,3,5};
    Solution s1;
    
    cout<<s1.getCount(a);
    return 0;
}



int maxOfArray(vector<int> &A) {
    int max = 0;
    if(A.size()>0)
    {max = A[0];}
    for (int i=1; i<A.size(); i++){
        if(max<A[i]){
            max = A[i];
        }
    }
    return max;
}
