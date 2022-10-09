#include<bits/stdc++.h>
using namespace std;
int main()
{
	int sum=0;
	double rqsum=0;
	priority_queue<double> pq;
	for(const auto& i: a)
	{
		pq.push(i);	
		sum+=i;
	}
	rqsum=sum/2.0;
	double itsum=sum/1.0;
	int cnt=0;
	while(pq.empty() == false)
	{
		double t=pq.top();
		pq.pop();
		itsum-=(t/2.0);
		cnt++;
		pq.push(t/2.0);
		if(itsum<=rqsum)break;
	}
	return cnt;
}
