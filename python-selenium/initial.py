# Selenium with Python
# No anduvo desde Jupiter

from selenium import webdriver
from selenium.webdriver.common.keys import Keys # Enviar pulsaciones del teclado
import time

#Open Google Chrome
driver = webdriver.Chrome(executable_path=r'./WebDriver/chromedriver.exe')
driver.get('https://www.mercadolibre.com.ar')
print("Browser Window opened")

# Maximize Window
driver.maximize_window()

# Search in ML
driver.find_element_by_name('as_word').send_keys('Caballitos de madera' + Keys.ENTER)

time.sleep(10)
#Close function
driver.close()
print("Browser Window closed")