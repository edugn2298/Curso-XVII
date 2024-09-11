
#Importar libreria
import pywhatkit as pw
import time
"""
id = "BTdpekISqwf6qLcbx21PoD"
mensaje = "Putos es un Bot"

pw.sendwhatmsg_to_group(id, mensaje, 19, 6)

"""

personas = [
  {
    "nombre": "Gabrielito",
    "telefono": "+584246270211"
  },
  {
    "nombre": "Richard Colina",
    "telefono": "+584121003768"
  }
]

for persona in personas:
  mensaje = "Hola " + persona["nombre"] + ", este es un mensaje automatizado"
  pw.sendwhatmsg_instantly(persona["telefono"], mensaje, 20, True)
  time.sleep(10)