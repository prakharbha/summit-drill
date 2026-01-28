import fitz
import os

def extract_images_from_pdf(pdf_path, output_folder="extracted_images"):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    doc = fitz.open(pdf_path)
    print(f"Opened document: {pdf_path}")
    image_count = 0

    # Iterate through every page
    for page_index in range(len(doc)):
        page = doc[page_index]
        # Get all images on the page
        image_list = page.get_images(full=True)

        for img_index, img in enumerate(image_list):
            xref = img[0]
            # Extract the image dictionary
            image_bytes = doc.extract_image(xref)
            if image_bytes:
                image_ext = image_bytes["ext"]
                image_data = image_bytes["image"]

                # Define a unique filename
                image_filename = os.path.join(output_folder, f"page{page_index+1}_img{img_index+1}_xref{xref}.{image_ext}")
                
                # Save the image file
                with open(image_filename, "wb") as f:
                    f.write(image_data)
                print(f"Saved image: {image_filename}")
                image_count += 1
                
    doc.close()
    print(f"Extraction complete. Total images saved: {image_count}")

# Example usage:
extract_images_from_pdf("Summit Deck Revised-1.pdf", "public/user_extracted_images")
