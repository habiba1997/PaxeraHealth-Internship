import numpy as np
import cv2
from  matplotlib import pyplot as plt
#img = cv2.imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps1\\30690\\ben_rcc.png')
import matplotlib.pyplot as plt
from matplotlib import cm
from skimage.color import rgb2gray
from skimage.io import imread
import scipy.fftpack as fp
import scipy.signal as signal
#im = rgb2gray(imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps1\\30690\\ben_lmlo.png'))
import cv2
import numpy as np
def trying():
    # Reading the input image
    img = cv2.imread('C:\\Users\\M.Essam\\Desktop\\Heatmaps\\32353\\mal_lcc.png', 0)

    # Taking a matrix of size 5 as the kernel
    kernel = np.ones((5, 5), np.uint8)

    # The first parameter is the original image,
    # kernel is the matrix with which image is
    # convolved and third parameter is the number
    # of iterations, which will determine how much
    # you want to erode/dilate a given image.
    img_dilation = cv2.dilate(img, kernel, iterations=10)
    img_erosion = cv2.erode(img_dilation, kernel, iterations=10)
    plt.imshow(img)
    plt.show()
    plt.imshow(img_erosion)
    plt.show()
    plt.imshow(img_dilation)

    plt.show()
def image_masking(filepath):


    BLUR = 21
    CANNY_THRESH_1 = 100
    CANNY_THRESH_2 = 100
    MASK_DILATE_ITER = 10
    MASK_ERODE_ITER = 10
    MASK_COLOR = (0.0,0.0,0.0) # In BGR format

    gray = cv2.imread(filepath,0)
    edges = cv2.Canny(gray, CANNY_THRESH_1, CANNY_THRESH_2)
    kernel = np.ones((3, 3), np.uint8)
    edges = cv2.dilate(edges, kernel)
    edges = cv2.erode(edges, kernel)
    contour_info = []
    contours, hierarchy = cv2.findContours(edges, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for c in contours:
        contour_info.append((c, cv2.isContourConvex(c), cv2.contourArea(c),))
    contour_info = sorted(contour_info, key=lambda c: c[2], reverse=True)
    max_contour = contour_info[0]
    for c in contour_info:
        cv2.fillConvexPoly(gray, c[0], (255))
    mask = cv2.dilate(gray, None, iterations=MASK_DILATE_ITER)
    mask = cv2.erode(mask, None, iterations=MASK_ERODE_ITER)
    mask = cv2.GaussianBlur(mask, (BLUR, BLUR), 0)

    mask_stack = np.dstack([mask]*3)
    mask_stack  = mask_stack.astype('float32') / 255.0
    img = img.astype('float32') / 255.0

    masked = (mask_stack * img) + ((1-mask_stack) * MASK_COLOR)
    masked = (masked * 255).astype('uint8')

    fileName, fileExtension = filepath.split('.')
    fileName += '-masked.'
    filepath = fileName + fileExtension
    print(filepath)

    cv2.imwrite(filepath, masked)
filepath = 'C:\\Users\\M.Essam\\Desktop\\Heatmaps1\\30690\\ben_rcc.png'
trying()