La función century tiene como propósito calcular el siglo en el que se encuentra un determinado año. Para ello, utiliza una simple fórmula basada en la división y redondeo hacia arriba.

Detalles:
    Parámetro:
        year: Un número que representa el año del cual queremos obtener el siglo.
    Proceso:
        La función divide el año entre 100 utilizando year / 100.
        Luego, utiliza Math.ceil() para redondear el resultado hacia arriba, ya que el siglo cambia al superar cada múltiplo de 100 (por ejemplo, el año 101 pertenece al siglo 2, y no al siglo 1).
    Valor de retorno:
        Retorna un número entero que indica el siglo en el que cae el año proporcionado.