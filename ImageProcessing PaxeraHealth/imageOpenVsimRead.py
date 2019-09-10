from PIL import ImageFilter, Image
import cv2
import numpy as np

img = Image.open("image.png")
img1 = cv2.imread('image.png')
img = np.array(img)
print(type(img))
print(type(img1))