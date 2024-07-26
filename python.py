#run "pip install pandas" in your terminal / powershell

import pandas as pd

def convert_csv_to_excel(csv_file, excel_file):
    df = pd.read_csv(csv_file)
    df.to_excel(excel_file, index=False)

# Example usage
csv_file = 'input.csv'
excel_file = 'output.xlsx'
convert_csv_to_excel(csv_file, excel_file)