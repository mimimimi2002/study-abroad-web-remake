import pandas as pd
import json

judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=0,header=None)
program_df = pd.read_excel("updated_judge.xlsx",sheet_name=6)
xls = pd.ExcelFile("updated_judge.xlsx")

# Extract all sheet names
sheet_names = xls.sheet_names

def read_option(sheet_id, row, end):
    option_df = judge_df.iloc[row+1, 1:end]
    connected = '/'.join(option_df.iloc[:end-1].astype(str).values.flatten())
    return sheet_names[sheet_id] + "/" + connected

def get_program_data(program_name):
    program_data = {
            "name": program_name,
            "url": str(program_df[program_name][0]),
            "outline": " ".join(program_df[program_name][3].split()),
            "period": " ".join(program_df[program_name][4].split()),
            "schedule": " ".join(str(program_df[program_name][5]).split()),
            "cost": " ".join(str(program_df[program_name][6]).split()),
            "application_grade": " ".join(str(program_df[program_name][7]).split()),
            "contact": " ".join(str(program_df[program_name][8]).split()),
            "ID": str(program_df[program_name][1])
        }
    return program_data

judge_data = {}
option_data = {}

for i in range(judge_df.shape[0] - 1):
    programs_list = judge_df.iloc[i+1, 2:].dropna()
    query = f"H1P{i+1}"

    # Initialize a list to store each program's data
    programs = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i+1, 2:].dropna()[j+2])

        # Create a dictionary for each program
        program_data = get_program_data(program_name)
        option = read_option(0, i, 2)

        programs.append(program_data)

    judge_data[query] = programs

    if option:
        option_data[query] = option

judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=1,header=None)

language = ['L1','L2','L3','L4','L5']
period = ['P1','P2','P3','P4']
k = -1
p = -1
for i in range(judge_df.shape[0] - 1):
    programs_list = judge_df.iloc[i + 1, 3:].dropna()
    p += 1
    if i % 4 == 0:
        k += 1
        p = 0

    query = f"H2{language[k % 5]}{period[p % 4]}"
    program_entries = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i + 1, 3:].dropna()[j + 3])

        program_data = get_program_data(program_name)
        option = read_option(1, i, 3)

        program_entries.append(program_data)

    judge_data[query] = program_entries
    if option:
        option_data[query] = option

judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=2,header=None)
season = ['S1','S2']
period = ['P1','P2','P3','P4']
k = -1
p = -1
for i in range(judge_df.shape[0] - 1):
    programs_list = judge_df.iloc[i + 1, 3:].dropna()
    p += 1
    if i % 4 == 0:
        k += 1
        p = 0

    query = f"H3{season[(k)%2]}{period[p%4]}"
    program_entries = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i + 1, 3:].dropna()[j + 3])

        program_data = get_program_data(program_name)
        option = read_option(2, i, 3)

        program_entries.append(program_data)

    judge_data[query] = program_entries
    if option:
        option_data[query] = option


judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=3,header=None)
purpose = ['PP1','PP2','PP3','PP4','PP5','PP6','PP7','PP8','PP9','PP10','PP11','PP12', 'PP13', 'PP14', 'PP15', 'PP16']
period = ['P1','P2','P3','P4']
k = -1
p = -1
for i in range(judge_df.shape[0]-1):
    programs_list = judge_df.iloc[i+1,3:].dropna()
    p += 1
    if i %4 == 0:
        k+=1
        p = 0

    query = f"H4{purpose[(k)%16]}{period[p%4]}"
    program_entries = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i + 1, 3:].dropna()[j + 3])

        program_data = get_program_data(program_name)
        option = read_option(3, i, 3)

        program_entries.append(program_data)

    judge_data[query] = program_entries
    if option:
        option_data[query] = option



judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=4,header=None)
style = ['Style1','Style2','Style3','Style4','Style5','Style6','Style7',]
period = ['P1','P2','P3','P4']
k = -1
p = -1
for i in range(judge_df.shape[0]-1):
    programs_list = judge_df.iloc[i+1,3:].dropna()
    p += 1
    if i %4 == 0:
        k+=1
        p = 0

    query = f"H5{style[(k)%7]}{period[p%4]}"
    program_entries = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i + 1, 3:].dropna()[j + 3])

        program_data = get_program_data(program_name)
        option = read_option(4, i, 3)

        program_entries.append(program_data)

    judge_data[query] = program_entries
    if option:
        option_data[query] = option

judge_df = pd.read_excel("updated_judge.xlsx",sheet_name=5,header=None)

for i in range(judge_df.shape[0] - 1):
    programs_list = judge_df.iloc[i+1, 2:].dropna()
    query = f"H6E{i+1}"

    # Initialize a list to store each program's data
    programs = []
    option = ""

    for j in range(len(programs_list)):
        program_name = str(judge_df.iloc[i+1, 2:].dropna()[j+2])

        # Create a dictionary for each program
        program_data = get_program_data(program_name)
        option = read_option(5, i, 2)

        programs.append(program_data)

    judge_data[query] = programs
    if option:
        option_data[query] = option

# Optional: Save to JSON file with pretty formatting
with open("judge_data.json", "w", encoding="utf-8") as f:
    json.dump(judge_data, f, ensure_ascii=False, indent=4)

with open("option_data.json", "w", encoding="utf-8") as f:
    json.dump(option_data, f, ensure_ascii=False, indent=4)