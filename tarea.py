# Importar las bibliotecas necesarias
import cv2
import numpy as np
import argparse

# Definir una función para analizar los datos del usuario desde la línea de comandos
def parse_user_data():
    # Crear un objeto ArgumentParser con una descripción
    parser = argparse.ArgumentParser(description='Apply geometric transformations to an image')
    # Agregar un argumento para la ruta de la imagen de entrada
    parser.add_argument('--input_image', 
                        type=str, 
                        help='Path to the input image')
    # Analizar los argumentos proporcionados por el usuario
    return parser.parse_args()

# Definir una función para cargar una imagen desde un archivo
def load_image(filename):
    # Leer la imagen desde el archivo especificado
    img = cv2.imread(filename)
    # Verificar si la imagen se cargó correctamente
    if img is None:
        # Imprimir un mensaje de error y salir del programa
        print("Error: Unable to load image.")
        exit()
    # Devolver la imagen cargada
    return img

# Definir una función para convertir la imagen original a HSV 
def convert_original2HSV(img):
    img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    return img_hsv

# Definir una función para convertir la imagen de HSV a RGB
def convert_HSV2RGB(img_hsv):
    img_rgb = cv2.cvtColor(img_hsv, cv2.COLOR_HSV2RGB)
    return img_rgb

# Definir una función para visualizar una imagen en una ventana
def visualise_image(img, title):
    # Mostrar la imagen en una ventana con el título especificado
    cv2.imshow(title, img)
    # Esperar un milisegundo para asegurar que la ventana se cree antes de cambiar su tamaño
    cv2.waitKey(1)

# Definir una función para cerrar todas las ventanas abiertas
def close_windows():
    # Esperar indefinidamente hasta que se presione una tecla
    cv2.waitKey(0)
    # Cerrar todas las ventanas
    cv2.destroyAllWindows()

# Definir una función para ejecutar el proceso completo de transformación de imágenes
def run_pipeline():
    # Analizar los argumentos proporcionados por el usuario
    args = parse_user_data()
    # Obtener la ruta de la imagen de entrada desde los argumentos analizados
    input_image = args.input_image

    # Cargar la imagen de entrada desde el archivo
    img = load_image(input_image)

    # Convertir la imagen original a HSV
    img_hsv = convert_original2HSV(img)

    # Convertir la imagen HSV a RGB
    img_rgb = convert_HSV2RGB(img_hsv)

    # Directorio para guardar las imagenes
    import os
    output_dir = "output_images"
    os.makedirs(output_dir, exist_ok=True)

    #cv2.imwrite(os.path.join(output_dir, "rotated_immage.jpg"), img_rotated)
    #cv2.imwrite(os.path.join(output_dir, "translated_immage.jpg"), img_translated)
    #cv2.imwrite(os.path.join(output_dir, "reflected_immage.jpg"), img_reflected)


    # Visualizar las imagenes
    ventana = (350,350)
    # Visualizar la imagen de entrada
    cv2.namedWindow("Input Image", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("Input Image", ventana)
    cv2.imshow("Input Image", img)
    cv2.imwrite(os.path.join(output_dir, "input_immage.jpg"), img)
    #Visualizar la imagen original convertida a HSV
    cv2.namedWindow("Original to HSV Image", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("Original to HSV Image", ventana)
    cv2.imshow("Original to HSV Image", img_hsv)
    cv2.imwrite(os.path.join(output_dir, "Original_to_HSV.jpg"), img_hsv)
    #Visualizar la imagen HSV convertida a RGB
    cv2.namedWindow("HSV to RGB Image", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("HSV to RGB Image", ventana)
    cv2.imshow("HSV to RGB Image", img_rgb)
    cv2.imwrite(os.path.join(output_dir, "HSV_to_RGB.jpg"), img_rgb)

    # Cerrar todas las ventanas
    close_windows()
    # Imprimir un mensaje de finalización del programa
    print('Program finished!\n')

# Punto de entrada del programa
if _name_ == "_main_":
    # Ejecutar el proceso completo de transformación de imágenes
    run_pipeline()