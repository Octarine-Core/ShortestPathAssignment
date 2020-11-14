names = ['PC','Cl', 'L1','ED','RB','Ma','Al']

adjMtrx = [
[0.00,  2047.43,  1972.63,  4160.57,  1525.24,  3021.23,  2015.74],
[252.29,  0.00,  1401.66,  5052.83,  3239.06,  1661.67,  1154.34],
[744.70,  3146.25,  0.00,  3449.00,  4060.86,  2730.10,  2595.37],
[895.94, 3618.22,  1851.03,  0.00,  3190.60,  1081.74,  986.03],
[522.58,  1763.53,  2609.29,  3512.83,  0.00,  2049.65,  1732.02],
[313.93,  2828.41,  2652.51,  4731.98,  2485.41,  0.00,  1564.06],
[314.68,  1545.52,  2392.39,  3844.41,  2426.88,  1360.95,  0.00]
]

a = [1,2,3,4,5,6]

minimum = 999999999
currMinPath = []
def permutations(start, end):
    if end==start:
        global minimum
        cost = pathCost(a)
        if (cost<minimum):
            minimum = cost
            global currMinPath
            currMinPath = a.copy()
        return
    for i in range(start, end+1):
        #swapping
        a[i],a[start] = a[start],a[i]
        #calling permutation function
        #by keeping the element at the index start fixed
        permutations(start+1, end)
        #restoring the array
        a[i],a[start] = a[start],a[i]

def pathCost(path):
	currVertex = 0
	cost = 0
	for i in range(6):
		cost += adjMtrx[currVertex][path[i]]
		currVertex = path[i]
	cost += adjMtrx[currVertex][0]
	return cost

permutations(0,len(a)-1)

print("Smallest path is ")
print("PC")

for indx in currMinPath:
	print (names[indx])

print("PC")
print("cost is " + str(minimum))
