 
import json
 
# Opening JSON file
f = open('publications.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
new_data = []
print(len(data))
for i in data:    
    i.pop('id', None)
data.reverse()
# Closing file
f.close()
with open('publications_new2.json', 'w') as f:
    json.dump(data, f)
