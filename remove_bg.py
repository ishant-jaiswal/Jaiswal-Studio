from PIL import Image
import sys

def remove_background(input_path, output_path, tolerance=50):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if pixel is dark (black background)
            if item[0] < tolerance and item[1] < tolerance and item[2] < tolerance:
                newData.append((0, 0, 0, 0)) # Transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Args: input_path, output_path
    if len(sys.argv) > 2:
        remove_background(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python remove_bg.py <input> <output>")
