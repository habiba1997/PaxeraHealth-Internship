import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import ImageFilter, Image
import PIL


import numpy as np
#img = cv2.imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps1\\30690\\ben_rcc.png')
from matplotlib import cm

import scipy.fftpack as fp
import scipy.signal as signal


#im = rgb2gray(imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps1\\30690\\ben_lmlo.png'))

def trying(img):
    # Reading the input image
    #img = cv2.imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps\\32353\\mal_lcc.png', 0)

    # Taking a matrix of size 5 as the kernel
    kernel = np.ones((150, 150), np.uint8)

    # The first parameter is the original image,
    # kernel is the matrix with which image is
    # convolved and third parameter is the number
    # of iterations, which will determine how much
    # you want to erode/dilate a given image.
    img_dilation = cv2.dilate(img, kernel, iterations=10)
    img_erosion = cv2.erode(img_dilation, kernel, iterations=10)


    return img_erosion


plt.figure()
plt.subplot(321)

img = cv2.imread('image.png', 0)
plt.imshow(img)

erosion = trying(img)
plt.subplot(322)
plt.imshow(erosion)
img = PIL.Image.fromarray(erosion)

#img = Image.open("image.png")

img = img.convert( "RGBA" )
img=img.filter(ImageFilter.BLUR)
img=img.filter(ImageFilter.SHARPEN)

img=img.filter(ImageFilter.SMOOTH_MORE)
img = img.filter(ImageFilter.EDGE_ENHANCE_MORE)
img = np.array(img)


plt.subplot(323)
plt.imshow(img)
plt.show()
