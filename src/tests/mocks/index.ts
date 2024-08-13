import { TResponseData } from '@/types'

export const mockedTable = `
Salário mínimo vigente   Frequência: Mensal  de 1940.07  até 2023.04   Fonte: Ministério da Economia, Outras (Min. Economia/Outras)   Unidade: R$   Comentário: Salário mínimo nominal vigente - não considera abonos salariais ocorridos nos períodos. O salário mínimo urbano foi instituído no Brasil por decreto-lei do presidente Getúlio Vargas, durante a ditadura do Estado Novo, e começou a vigorar em julho de 1940, com valores diferenciados entre estados e sub-regiões. Em 1943, foi incorporado à Consolidação das Leis do Trabalho (CLT) e, em 1963, foi estendido ao campo por meio do Estatuto do Trabalhador Rural. Foi nacionalmente unificado em maio de 1984, mas, desde 2000, a Lei Complementar 103 permite que os estados fixem pisos estaduais superiores ao mínimo nacional. Nota: Os dados desta série para o período em que a legislação federal definia faixas diversificadas referem-se ao maior salário mínimo vigente no país. Mais informações:  www.dieese.org.br/analisecestabasica/salarioMinimo.html  e Evolução dos salários mínimos regionais.   Atualizado em: 27/03/2023\r\n\t\r\n\t\tLoading…\r\n\t\r\n\r\n\t\r\n\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tData\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tSalário mínimo vigente\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t1940.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.071,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.081,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.091,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.101,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.111,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1952.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.074,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.084,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.094,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.104,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.114,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.124,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.074,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.084,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.094,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.104,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.114,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.124,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.088,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.098,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.108,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.118,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.128,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.018,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.028,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.038,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.048,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.058,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.068,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.088,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.098,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.108,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.118,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.128,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.018,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.028,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.038,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.048,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.058,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.068,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.011,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.021,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.031,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.041,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.051,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.061,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.071,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.011,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.021,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.031,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.041,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.051,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.061,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.071,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1959.012,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.022,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.032,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.042,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.052,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.062,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.072,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.082,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.092,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.102,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.112,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.122,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.012,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.022,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.032,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.042,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.052,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.062,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.072,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.082,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.092,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.103,4909E-12\r\n\t\t\t\r\n\t\t\t\t1960.113,4909E-12\r\n\t\t\t\r\n\t\t\t\t1960.123,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.013,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.023,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.033,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.043,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.053,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.063,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.073,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.083,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.093,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.104,8873E-12\r\n\t\t\t\r\n\t\t\t\t1961.114,8873E-12\r\n\t\t\t\r\n\t\t\t\t1961.124,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.014,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.024,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.034,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.044,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.054,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.064,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.074,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.084,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.094,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.104,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.114,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.124,8873E-12\r\n\t\t\t\r\n\t\t\t\t1963.017,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.027,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.037,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.047,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.057,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.067,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.077,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.087,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.097,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.107,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.117,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.127,6364E-12\r\n\t\t\t\r\n\t\t\t\t1964.017,6364E-12\r\n\t\t\t\r\n\t\t\t\t1964.021,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.031,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.041,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.051,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.061,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.071,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.081,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.091,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.101,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.111,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.121,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.011,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.021,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.032,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.042,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.052,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.062,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.072,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.082,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.092,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.102,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.112,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.122,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.012,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.022,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.033,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.043,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.053,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.063,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.073,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.083,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.093,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.103,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.113,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.123,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.013,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.023,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.033,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.043,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.053,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.063,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.073,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.083,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.093,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.103,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.113,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.123,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.013,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.023,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.034,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.044,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.054,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.064,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.074,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.084,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.094,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.104,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.114,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.124,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.014,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.024,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.034,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.044,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.055,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.065,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.075,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.085,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.095,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.105,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.115,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.125,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.015,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.025,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.035,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.045,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.056,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.066,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.076,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.086,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.096,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.106,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.116,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.126,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.016,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.026,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.036,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.046,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.058,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.068,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.078,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.088,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.098,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.108,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.118,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.128,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.018,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.028,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.038,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.048,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.059,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.069,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.079,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.089,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.099,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.109,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.119,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.129,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.019,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.029,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.039,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.049,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.051,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.061,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.071,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.081,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.091,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.101,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.111,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.121,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.011,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.021,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.031,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.041,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.051,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.061,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.071,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.081,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.091,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.101,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.111,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.121,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.011,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.021,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.031,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.041,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.051,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.061,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.071,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.081,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.091,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.101,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.111,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.121,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.011,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.021,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.031,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.041,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.052,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.062,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.072,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.082,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.092,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.102,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.112,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.122,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.012,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.022,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.032,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.042,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.054,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.064,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.074,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.084,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.094,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.104,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.114,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.124,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.014,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.024,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.034,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.044,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.055,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.065,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.075,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.085,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.095,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.105,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.115,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.125,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.015,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.025,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.035,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.045,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.058,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.068,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.078,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.088,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.098,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.108,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.111,0665E-09\r\n\t\t\t\r\n\t\t\t\t1979.121,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.011,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.021,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.031,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.041,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.051,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.061,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.071,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.081,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.091,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.101,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.112,1050E-09\r\n\t\t\t\r\n\t\t\t\t1980.122,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.012,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.022,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.032,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.042,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.053,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.063,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.073,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.083,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.093,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.103,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.114,3375E-09\r\n\t\t\t\r\n\t\t\t\t1981.124,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.014,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.024,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.034,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.044,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.056,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.066,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.076,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.086,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.096,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.106,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.118,5702E-09\r\n\t\t\t\r\n\t\t\t\t1982.128,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.018,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.028,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.038,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.048,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.051,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.061,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.071,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.081,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.091,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.101,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.112,0771E-08\r\n\t\t\t\r\n\t\t\t\t1983.122,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.012,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.022,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.032,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.042,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.053,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.063,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.073,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.083,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.093,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.103,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.116,0567E-08\r\n\t\t\t\r\n\t\t\t\t1984.126,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.016,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.026,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.036,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.046,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.051,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.061,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.071,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.081,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.091,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.101,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.112,1818E-07\r\n\t\t\t\r\n\t\t\t\t1985.122,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.012,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.022,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.032,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.042,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.052,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.062,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.072,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.082,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.092,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.102,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.112,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.122,9236E-07\r\n\t\t\t\r\n\t\t\t\t1987.013,5084E-07\r\n\t\t\t\r\n\t\t\t\t1987.023,5084E-07\r\n\t\t\t\r\n\t\t\t\t1987.034,9745E-07\r\n\t\t\t\r\n\t\t\t\t1987.044,9745E-07\r\n\t\t\t\r\n\t\t\t\t1987.055,9695E-07\r\n\t\t\t\r\n\t\t\t\t1987.067,1633E-07\r\n\t\t\t\r\n\t\t\t\t1987.077,1633E-07\r\n\t\t\t\r\n\t\t\t\t1987.087,1636E-07\r\n\t\t\t\r\n\t\t\t\t1987.098,7273E-07\r\n\t\t\t\r\n\t\t\t\t1987.109,6000E-07\r\n\t\t\t\r\n\t\t\t\t1987.111,0909E-06\r\n\t\t\t\r\n\t\t\t\t1987.121,3091E-06\r\n\t\t\t\r\n\t\t\t\t1988.011,6364E-06\r\n\t\t\t\r\n\t\t\t\t1988.021,9200E-06\r\n\t\t\t\r\n\t\t\t\t1988.032,2691E-06\r\n\t\t\t\r\n\t\t\t\t1988.042,6400E-06\r\n\t\t\t\r\n\t\t\t\t1988.053,1680E-06\r\n\t\t\t\r\n\t\t\t\t1988.063,7702E-06\r\n\t\t\t\r\n\t\t\t\t1988.074,5251E-06\r\n\t\t\t\r\n\t\t\t\t1988.085,6553E-06\r\n\t\t\t\r\n\t\t\t\t1988.096,8945E-06\r\n\t\t\t\r\n\t\t\t\t1988.108,6182E-06\r\n\t\t\t\r\n\t\t\t\t1988.111,1200E-05\r\n\t\t\t\r\n\t\t\t\t1988.121,4700E-05\r\n\t\t\t\r\n\t\t\t\t1989.011,9772E-05\r\n\t\t\t\r\n\t\t\t\t1989.022,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.032,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.042,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.052,9600E-05\r\n\t\t\t\r\n\t\t\t\t1989.064,3636E-05\r\n\t\t\t\r\n\t\t\t\t1989.075,4473E-05\r\n\t\t\t\r\n\t\t\t\t1989.087,0138E-05\r\n\t\t\t\r\n\t\t\t\t1989.099,0720E-05\r\n\t\t\t\r\n\t\t\t\t1989.101,3881E-04\r\n\t\t\t\r\n\t\t\t\t1989.112,0267E-04\r\n\t\t\t\r\n\t\t\t\t1989.122,8661E-04\r\n\t\t\t\r\n\t\t\t\t1990.014,6689E-04\r\n\t\t\t\r\n\t\t\t\t1990.027,2886E-04\r\n\t\t\t\r\n\t\t\t\t1990.031,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.041,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.051,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.061,4028E-03\r\n\t\t\t\r\n\t\t\t\t1990.071,7835E-03\r\n\t\t\t\r\n\t\t\t\t1990.081,8922E-03\r\n\t\t\t\r\n\t\t\t\t1990.092,2023E-03\r\n\t\t\t\r\n\t\t\t\t1990.102,3364E-03\r\n\t\t\t\r\n\t\t\t\t1990.113,0289E-03\r\n\t\t\t\r\n\t\t\t\t1990.123,2134E-03\r\n\t\t\t\r\n\t\t\t\t1991.014,4820E-03\r\n\t\t\t\r\n\t\t\t\t1991.020,01\r\n\t\t\t\r\n\t\t\t\t1991.030,01\r\n\t\t\t\r\n\t\t\t\t1991.040,01\r\n\t\t\t\r\n\t\t\t\t1991.050,01\r\n\t\t\t\r\n\t\t\t\t1991.060,01\r\n\t\t\t\r\n\t\t\t\t1991.070,01\r\n\t\t\t\r\n\t\t\t\t1991.080,01\r\n\t\t\t\r\n\t\t\t\t1991.090,02\r\n\t\t\t\r\n\t\t\t\t1991.100,02\r\n\t\t\t\r\n\t\t\t\t1991.110,02\r\n\t\t\t\r\n\t\t\t\t1991.120,02\r\n\t\t\t\r\n\t\t\t\t1992.010,03\r\n\t\t\t\r\n\t\t\t\t1992.020,03\r\n\t\t\t\r\n\t\t\t\t1992.030,03\r\n\t\t\t\r\n\t\t\t\t1992.040,03\r\n\t\t\t\r\n\t\t\t\t1992.050,08\r\n\t\t\t\r\n\t\t\t\t1992.060,08\r\n\t\t\t\r\n\t\t\t\t1992.070,08\r\n\t\t\t\r\n\t\t\t\t1992.080,08\r\n\t\t\t\r\n\t\t\t\t1992.090,19\r\n\t\t\t\r\n\t\t\t\t1992.100,19\r\n\t\t\t\r\n\t\t\t\t1992.110,19\r\n\t\t\t\r\n\t\t\t\t1992.120,19\r\n\t\t\t\r\n\t\t\t\t1993.010,45\r\n\t\t\t\r\n\t\t\t\t1993.020,45\r\n\t\t\t\r\n\t\t\t\t1993.030,62\r\n\t\t\t\r\n\t\t\t\t1993.040,62\r\n\t\t\t\r\n\t\t\t\t1993.051,20\r\n\t\t\t\r\n\t\t\t\t1993.061,20\r\n\t\t\t\r\n\t\t\t\t1993.071,69\r\n\t\t\t\r\n\t\t\t\t1993.082,01\r\n\t\t\t\r\n\t\t\t\t1993.093,49\r\n\t\t\t\r\n\t\t\t\t1993.104,37\r\n\t\t\t\r\n\t\t\t\t1993.115,46\r\n\t\t\t\r\n\t\t\t\t1993.126,82\r\n\t\t\t\r\n\t\t\t\t1994.0111,96\r\n\t\t\t\r\n\t\t\t\t1994.0215,57\r\n\t\t\t\r\n\t\t\t\t1994.0318,29\r\n\t\t\t\r\n\t\t\t\t1994.0426,01\r\n\t\t\t\r\n\t\t\t\t1994.0537,41\r\n\t\t\t\r\n\t\t\t\t1994.0653,68\r\n\t\t\t\r\n\t\t\t\t1994.0764,79\r\n\t\t\t\r\n\t\t\t\t1994.0864,79\r\n\t\t\t\r\n\t\t\t\t1994.0970,00\r\n\t\t\t\r\n\t\t\t\t1994.1070,00\r\n\t\t\t\r\n\t\t\t\t1994.1170,00\r\n\t\t\t\r\n\t\t\t\t1994.1270,00\r\n\t\t\t\r\n\t\t\t\t1995.0170,00\r\n\t\t\t\r\n\t\t\t\t1995.0270,00\r\n\t\t\t\r\n\t\t\t\t1995.0370,00\r\n\t\t\t\r\n\t\t\t\t1995.0470,00\r\n\t\t\t\r\n\t\t\t\t1995.05100,00\r\n\t\t\t\r\n\t\t\t\t1995.06100,00\r\n\t\t\t\r\n\t\t\t\t1995.07100,00\r\n\t\t\t\r\n\t\t\t\t1995.08100,00\r\n\t\t\t\r\n\t\t\t\t1995.09100,00\r\n\t\t\t\r\n\t\t\t\t1995.10100,00\r\n\t\t\t\r\n\t\t\t\t1995.11100,00\r\n\t\t\t\r\n\t\t\t\t1995.12100,00\r\n\t\t\t\r\n\t\t\t\t1996.01100,00\r\n\t\t\t\r\n\t\t\t\t1996.02100,00\r\n\t\t\t\r\n\t\t\t\t1996.03100,00\r\n\t\t\t\r\n\t\t\t\t1996.04100,00\r\n\t\t\t\r\n\t\t\t\t1996.05112,00\r\n\t\t\t\r\n\t\t\t\t1996.06112,00\r\n\t\t\t\r\n\t\t\t\t1996.07112,00\r\n\t\t\t\r\n\t\t\t\t1996.08112,00\r\n\t\t\t\r\n\t\t\t\t1996.09112,00\r\n\t\t\t\r\n\t\t\t\t1996.10112,00\r\n\t\t\t\r\n\t\t\t\t1996.11112,00\r\n\t\t\t\r\n\t\t\t\t1996.12112,00\r\n\t\t\t\r\n\t\t\t\t1997.01112,00\r\n\t\t\t\r\n\t\t\t\t1997.02112,00\r\n\t\t\t\r\n\t\t\t\t1997.03112,00\r\n\t\t\t\r\n\t\t\t\t1997.04112,00\r\n\t\t\t\r\n\t\t\t\t1997.05120,00\r\n\t\t\t\r\n\t\t\t\t1997.06120,00\r\n\t\t\t\r\n\t\t\t\t1997.07120,00\r\n\t\t\t\r\n\t\t\t\t1997.08120,00\r\n\t\t\t\r\n\t\t\t\t1997.09120,00\r\n\t\t\t\r\n\t\t\t\t1997.10120,00\r\n\t\t\t\r\n\t\t\t\t1997.11120,00\r\n\t\t\t\r\n\t\t\t\t1997.12120,00\r\n\t\t\t\r\n\t\t\t\t1998.01120,00\r\n\t\t\t\r\n\t\t\t\t1998.02120,00\r\n\t\t\t\r\n\t\t\t\t1998.03120,00\r\n\t\t\t\r\n\t\t\t\t1998.04120,00\r\n\t\t\t\r\n\t\t\t\t1998.05130,00\r\n\t\t\t\r\n\t\t\t\t1998.06130,00\r\n\t\t\t\r\n\t\t\t\t1998.07130,00\r\n\t\t\t\r\n\t\t\t\t1998.08130,00\r\n\t\t\t\r\n\t\t\t\t1998.09130,00\r\n\t\t\t\r\n\t\t\t\t1998.10130,00\r\n\t\t\t\r\n\t\t\t\t1998.11130,00\r\n\t\t\t\r\n\t\t\t\t1998.12130,00\r\n\t\t\t\r\n\t\t\t\t1999.01130,00\r\n\t\t\t\r\n\t\t\t\t1999.02130,00\r\n\t\t\t\r\n\t\t\t\t1999.03130,00\r\n\t\t\t\r\n\t\t\t\t1999.04130,00\r\n\t\t\t\r\n\t\t\t\t1999.05136,00\r\n\t\t\t\r\n\t\t\t\t1999.06136,00\r\n\t\t\t\r\n\t\t\t\t1999.07136,00\r\n\t\t\t\r\n\t\t\t\t1999.08136,00\r\n\t\t\t\r\n\t\t\t\t1999.09136,00\r\n\t\t\t\r\n\t\t\t\t1999.10136,00\r\n\t\t\t\r\n\t\t\t\t1999.11136,00\r\n\t\t\t\r\n\t\t\t\t1999.12136,00\r\n\t\t\t\r\n\t\t\t\t2000.01136,00\r\n\t\t\t\r\n\t\t\t\t2000.02136,00\r\n\t\t\t\r\n\t\t\t\t2000.03136,00\r\n\t\t\t\r\n\t\t\t\t2000.04151,00\r\n\t\t\t\r\n\t\t\t\t2000.05151,00\r\n\t\t\t\r\n\t\t\t\t2000.06151,00\r\n\t\t\t\r\n\t\t\t\t2000.07151,00\r\n\t\t\t\r\n\t\t\t\t2000.08151,00\r\n\t\t\t\r\n\t\t\t\t2000.09151,00\r\n\t\t\t\r\n\t\t\t\t2000.10151,00\r\n\t\t\t\r\n\t\t\t\t2000.11151,00\r\n\t\t\t\r\n\t\t\t\t2000.12151,00\r\n\t\t\t\r\n\t\t\t\t2001.01151,00\r\n\t\t\t\r\n\t\t\t\t2001.02151,00\r\n\t\t\t\r\n\t\t\t\t2001.03151,00\r\n\t\t\t\r\n\t\t\t\t2001.04180,00\r\n\t\t\t\r\n\t\t\t\t2001.05180,00\r\n\t\t\t\r\n\t\t\t\t2001.06180,00\r\n\t\t\t\r\n\t\t\t\t2001.07180,00\r\n\t\t\t\r\n\t\t\t\t2001.08180,00\r\n\t\t\t\r\n\t\t\t\t2001.09180,00\r\n\t\t\t\r\n\t\t\t\t2001.10180,00\r\n\t\t\t\r\n\t\t\t\t2001.11180,00\r\n\t\t\t\r\n\t\t\t\t2001.12180,00\r\n\t\t\t\r\n\t\t\t\t2002.01180,00\r\n\t\t\t\r\n\t\t\t\t2002.02180,00\r\n\t\t\t\r\n\t\t\t\t2002.03180,00\r\n\t\t\t\r\n\t\t\t\t2002.04200,00\r\n\t\t\t\r\n\t\t\t\t2002.05200,00\r\n\t\t\t\r\n\t\t\t\t2002.06200,00\r\n\t\t\t\r\n\t\t\t\t2002.07200,00\r\n\t\t\t\r\n\t\t\t\t2002.08200,00\r\n\t\t\t\r\n\t\t\t\t2002.09200,00\r\n\t\t\t\r\n\t\t\t\t2002.10200,00\r\n\t\t\t\r\n\t\t\t\t2002.11200,00\r\n\t\t\t\r\n\t\t\t\t2002.12200,00\r\n\t\t\t\r\n\t\t\t\t2003.01200,00\r\n\t\t\t\r\n\t\t\t\t2003.02200,00\r\n\t\t\t\r\n\t\t\t\t2003.03200,00\r\n\t\t\t\r\n\t\t\t\t2003.04240,00\r\n\t\t\t\r\n\t\t\t\t2003.05240,00\r\n\t\t\t\r\n\t\t\t\t2003.06240,00\r\n\t\t\t\r\n\t\t\t\t2003.07240,00\r\n\t\t\t\r\n\t\t\t\t2003.08240,00\r\n\t\t\t\r\n\t\t\t\t2003.09240,00\r\n\t\t\t\r\n\t\t\t\t2003.10240,00\r\n\t\t\t\r\n\t\t\t\t2003.11240,00\r\n\t\t\t\r\n\t\t\t\t2003.12240,00\r\n\t\t\t\r\n\t\t\t\t2004.01240,00\r\n\t\t\t\r\n\t\t\t\t2004.02240,00\r\n\t\t\t\r\n\t\t\t\t2004.03240,00\r\n\t\t\t\r\n\t\t\t\t2004.04240,00\r\n\t\t\t\r\n\t\t\t\t2004.05260,00\r\n\t\t\t\r\n\t\t\t\t2004.06260,00\r\n\t\t\t\r\n\t\t\t\t2004.07260,00\r\n\t\t\t\r\n\t\t\t\t2004.08260,00\r\n\t\t\t\r\n\t\t\t\t2004.09260,00\r\n\t\t\t\r\n\t\t\t\t2004.10260,00\r\n\t\t\t\r\n\t\t\t\t2004.11260,00\r\n\t\t\t\r\n\t\t\t\t2004.12260,00\r\n\t\t\t\r\n\t\t\t\t2005.01260,00\r\n\t\t\t\r\n\t\t\t\t2005.02260,00\r\n\t\t\t\r\n\t\t\t\t2005.03260,00\r\n\t\t\t\r\n\t\t\t\t2005.04260,00\r\n\t\t\t\r\n\t\t\t\t2005.05300,00\r\n\t\t\t\r\n\t\t\t\t2005.06300,00\r\n\t\t\t\r\n\t\t\t\t2005.07300,00\r\n\t\t\t\r\n\t\t\t\t2005.08300,00\r\n\t\t\t\r\n\t\t\t\t2005.09300,00\r\n\t\t\t\r\n\t\t\t\t2005.10300,00\r\n\t\t\t\r\n\t\t\t\t2005.11300,00\r\n\t\t\t\r\n\t\t\t\t2005.12300,00\r\n\t\t\t\r\n\t\t\t\t2006.01300,00\r\n\t\t\t\r\n\t\t\t\t2006.02300,00\r\n\t\t\t\r\n\t\t\t\t2006.03300,00\r\n\t\t\t\r\n\t\t\t\t2006.04350,00\r\n\t\t\t\r\n\t\t\t\t2006.05350,00\r\n\t\t\t\r\n\t\t\t\t2006.06350,00\r\n\t\t\t\r\n\t\t\t\t2006.07350,00\r\n\t\t\t\r\n\t\t\t\t2006.08350,00\r\n\t\t\t\r\n\t\t\t\t2006.09350,00\r\n\t\t\t\r\n\t\t\t\t2006.10350,00\r\n\t\t\t\r\n\t\t\t\t2006.11350,00\r\n\t\t\t\r\n\t\t\t\t2006.12350,00\r\n\t\t\t\r\n\t\t\t\t2007.01350,00\r\n\t\t\t\r\n\t\t\t\t2007.02350,00\r\n\t\t\t\r\n\t\t\t\t2007.03350,00\r\n\t\t\t\r\n\t\t\t\t2007.04380,00\r\n\t\t\t\r\n\t\t\t\t2007.05380,00\r\n\t\t\t\r\n\t\t\t\t2007.06380,00\r\n\t\t\t\r\n\t\t\t\t2007.07380,00\r\n\t\t\t\r\n\t\t\t\t2007.08380,00\r\n\t\t\t\r\n\t\t\t\t2007.09380,00\r\n\t\t\t\r\n\t\t\t\t2007.10380,00\r\n\t\t\t\r\n\t\t\t\t2007.11380,00\r\n\t\t\t\r\n\t\t\t\t2007.12380,00\r\n\t\t\t\r\n\t\t\t\t2008.01380,00\r\n\t\t\t\r\n\t\t\t\t2008.02380,00\r\n\t\t\t\r\n\t\t\t\t2008.03415,00\r\n\t\t\t\r\n\t\t\t\t2008.04415,00\r\n\t\t\t\r\n\t\t\t\t2008.05415,00\r\n\t\t\t\r\n\t\t\t\t2008.06415,00\r\n\t\t\t\r\n\t\t\t\t2008.07415,00\r\n\t\t\t\r\n\t\t\t\t2008.08415,00\r\n\t\t\t\r\n\t\t\t\t2008.09415,00\r\n\t\t\t\r\n\t\t\t\t2008.10415,00\r\n\t\t\t\r\n\t\t\t\t2008.11415,00\r\n\t\t\t\r\n\t\t\t\t2008.12415,00\r\n\t\t\t\r\n\t\t\t\t2009.01415,00\r\n\t\t\t\r\n\t\t\t\t2009.02465,00\r\n\t\t\t\r\n\t\t\t\t2009.03465,00\r\n\t\t\t\r\n\t\t\t\t2009.04465,00\r\n\t\t\t\r\n\t\t\t\t2009.05465,00\r\n\t\t\t\r\n\t\t\t\t2009.06465,00\r\n\t\t\t\r\n\t\t\t\t2009.07465,00\r\n\t\t\t\r\n\t\t\t\t2009.08465,00\r\n\t\t\t\r\n\t\t\t\t2009.09465,00\r\n\t\t\t\r\n\t\t\t\t2009.10465,00\r\n\t\t\t\r\n\t\t\t\t2009.11465,00\r\n\t\t\t\r\n\t\t\t\t2009.12465,00\r\n\t\t\t\r\n\t\t\t\t2010.01510,00\r\n\t\t\t\r\n\t\t\t\t2010.02510,00\r\n\t\t\t\r\n\t\t\t\t2010.03510,00\r\n\t\t\t\r\n\t\t\t\t2010.04510,00\r\n\t\t\t\r\n\t\t\t\t2010.05510,00\r\n\t\t\t\r\n\t\t\t\t2010.06510,00\r\n\t\t\t\r\n\t\t\t\t2010.07510,00\r\n\t\t\t\r\n\t\t\t\t2010.08510,00\r\n\t\t\t\r\n\t\t\t\t2010.09510,00\r\n\t\t\t\r\n\t\t\t\t2010.10510,00\r\n\t\t\t\r\n\t\t\t\t2010.11510,00\r\n\t\t\t\r\n\t\t\t\t2010.12510,00\r\n\t\t\t\r\n\t\t\t\t2011.01540,00\r\n\t\t\t\r\n\t\t\t\t2011.02540,00\r\n\t\t\t\r\n\t\t\t\t2011.03545,00\r\n\t\t\t\r\n\t\t\t\t2011.04545,00\r\n\t\t\t\r\n\t\t\t\t2011.05545,00\r\n\t\t\t\r\n\t\t\t\t2011.06545,00\r\n\t\t\t\r\n\t\t\t\t2011.07545,00\r\n\t\t\t\r\n\t\t\t\t2011.08545,00\r\n\t\t\t\r\n\t\t\t\t2011.09545,00\r\n\t\t\t\r\n\t\t\t\t2011.10545,00\r\n\t\t\t\r\n\t\t\t\t2011.11545,00\r\n\t\t\t\r\n\t\t\t\t2011.12545,00\r\n\t\t\t\r\n\t\t\t\t2012.01622,00\r\n\t\t\t\r\n\t\t\t\t2012.02622,00\r\n\t\t\t\r\n\t\t\t\t2012.03622,00\r\n\t\t\t\r\n\t\t\t\t2012.04622,00\r\n\t\t\t\r\n\t\t\t\t2012.05622,00\r\n\t\t\t\r\n\t\t\t\t2012.06622,00\r\n\t\t\t\r\n\t\t\t\t2012.07622,00\r\n\t\t\t\r\n\t\t\t\t2012.08622,00\r\n\t\t\t\r\n\t\t\t\t2012.09622,00\r\n\t\t\t\r\n\t\t\t\t2012.10622,00\r\n\t\t\t\r\n\t\t\t\t2012.11622,00\r\n\t\t\t\r\n\t\t\t\t2012.12622,00\r\n\t\t\t\r\n\t\t\t\t2013.01678,00\r\n\t\t\t\r\n\t\t\t\t2013.02678,00\r\n\t\t\t\r\n\t\t\t\t2013.03678,00\r\n\t\t\t\r\n\t\t\t\t2013.04678,00\r\n\t\t\t\r\n\t\t\t\t2013.05678,00\r\n\t\t\t\r\n\t\t\t\t2013.06678,00\r\n\t\t\t\r\n\t\t\t\t2013.07678,00\r\n\t\t\t\r\n\t\t\t\t2013.08678,00\r\n\t\t\t\r\n\t\t\t\t2013.09678,00\r\n\t\t\t\r\n\t\t\t\t2013.10678,00\r\n\t\t\t\r\n\t\t\t\t2013.11678,00\r\n\t\t\t\r\n\t\t\t\t2013.12678,00\r\n\t\t\t\r\n\t\t\t\t2014.01724,00\r\n\t\t\t\r\n\t\t\t\t2014.02724,00\r\n\t\t\t\r\n\t\t\t\t2014.03724,00\r\n\t\t\t\r\n\t\t\t\t2014.04724,00\r\n\t\t\t\r\n\t\t\t\t2014.05724,00\r\n\t\t\t\r\n\t\t\t\t2014.06724,00\r\n\t\t\t\r\n\t\t\t\t2014.07724,00\r\n\t\t\t\r\n\t\t\t\t2014.08724,00\r\n\t\t\t\r\n\t\t\t\t2014.09724,00\r\n\t\t\t\r\n\t\t\t\t2014.10724,00\r\n\t\t\t\r\n\t\t\t\t2014.11724,00\r\n\t\t\t\r\n\t\t\t\t2014.12724,00\r\n\t\t\t\r\n\t\t\t\t2015.01788,00\r\n\t\t\t\r\n\t\t\t\t2015.02788,00\r\n\t\t\t\r\n\t\t\t\t2015.03788,00\r\n\t\t\t\r\n\t\t\t\t2015.04788,00\r\n\t\t\t\r\n\t\t\t\t2015.05788,00\r\n\t\t\t\r\n\t\t\t\t2015.06788,00\r\n\t\t\t\r\n\t\t\t\t2015.07788,00\r\n\t\t\t\r\n\t\t\t\t2015.08788,00\r\n\t\t\t\r\n\t\t\t\t2015.09788,00\r\n\t\t\t\r\n\t\t\t\t2015.10788,00\r\n\t\t\t\r\n\t\t\t\t2015.11788,00\r\n\t\t\t\r\n\t\t\t\t2015.12788,00\r\n\t\t\t\r\n\t\t\t\t2016.01880,00\r\n\t\t\t\r\n\t\t\t\t2016.02880,00\r\n\t\t\t\r\n\t\t\t\t2016.03880,00\r\n\t\t\t\r\n\t\t\t\t2016.04880,00\r\n\t\t\t\r\n\t\t\t\t2016.05880,00\r\n\t\t\t\r\n\t\t\t\t2016.06880,00\r\n\t\t\t\r\n\t\t\t\t2016.07880,00\r\n\t\t\t\r\n\t\t\t\t2016.08880,00\r\n\t\t\t\r\n\t\t\t\t2016.09880,00\r\n\t\t\t\r\n\t\t\t\t2016.10880,00\r\n\t\t\t\r\n\t\t\t\t2016.11880,00\r\n\t\t\t\r\n\t\t\t\t2016.12880,00\r\n\t\t\t\r\n\t\t\t\t2017.01937,00\r\n\t\t\t\r\n\t\t\t\t2017.02937,00\r\n\t\t\t\r\n\t\t\t\t2017.03937,00\r\n\t\t\t\r\n\t\t\t\t2017.04937,00\r\n\t\t\t\r\n\t\t\t\t2017.05937,00\r\n\t\t\t\r\n\t\t\t\t2017.06937,00\r\n\t\t\t\r\n\t\t\t\t2017.07937,00\r\n\t\t\t\r\n\t\t\t\t2017.08937,00\r\n\t\t\t\r\n\t\t\t\t2017.09937,00\r\n\t\t\t\r\n\t\t\t\t2017.10937,00\r\n\t\t\t\r\n\t\t\t\t2017.11937,00\r\n\t\t\t\r\n\t\t\t\t2017.12937,00\r\n\t\t\t\r\n\t\t\t\t2018.01954,00\r\n\t\t\t\r\n\t\t\t\t2018.02954,00\r\n\t\t\t\r\n\t\t\t\t2018.03954,00\r\n\t\t\t\r\n\t\t\t\t2018.04954,00\r\n\t\t\t\r\n\t\t\t\t2018.05954,00\r\n\t\t\t\r\n\t\t\t\t2018.06954,00\r\n\t\t\t\r\n\t\t\t\t2018.07954,00\r\n\t\t\t\r\n\t\t\t\t2018.08954,00\r\n\t\t\t\r\n\t\t\t\t2018.09954,00\r\n\t\t\t\r\n\t\t\t\t2018.10954,00\r\n\t\t\t\r\n\t\t\t\t2018.11954,00\r\n\t\t\t\r\n\t\t\t\t2018.12954,00\r\n\t\t\t\r\n\t\t\t\t2019.01998,00\r\n\t\t\t\r\n\t\t\t\t2019.02998,00\r\n\t\t\t\r\n\t\t\t\t2019.03998,00\r\n\t\t\t\r\n\t\t\t\t2019.04998,00\r\n\t\t\t\r\n\t\t\t\t2019.05998,00\r\n\t\t\t\r\n\t\t\t\t2019.06998,00\r\n\t\t\t\r\n\t\t\t\t2019.07998,00\r\n\t\t\t\r\n\t\t\t\t2019.08998,00\r\n\t\t\t\r\n\t\t\t\t2019.09998,00\r\n\t\t\t\r\n\t\t\t\t2019.10998,00\r\n\t\t\t\r\n\t\t\t\t2019.11998,00\r\n\t\t\t\r\n\t\t\t\t2019.12998,00\r\n\t\t\t\r\n\t\t\t\t2020.011.039,00\r\n\t\t\t\r\n\t\t\t\t2020.021.045,00\r\n\t\t\t\r\n\t\t\t\t2020.031.045,00\r\n\t\t\t\r\n\t\t\t\t2020.041.045,00\r\n\t\t\t\r\n\t\t\t\t2020.051.045,00\r\n\t\t\t\r\n\t\t\t\t2020.061.045,00\r\n\t\t\t\r\n\t\t\t\t2020.071.045,00\r\n\t\t\t\r\n\t\t\t\t2020.081.045,00\r\n\t\t\t\r\n\t\t\t\t2020.091.045,00\r\n\t\t\t\r\n\t\t\t\t2020.101.045,00\r\n\t\t\t\r\n\t\t\t\t2020.111.045,00\r\n\t\t\t\r\n\t\t\t\t2020.121.045,00\r\n\t\t\t\r\n\t\t\t\t2021.011.100,00\r\n\t\t\t\r\n\t\t\t\t2021.021.100,00\r\n\t\t\t\r\n\t\t\t\t2021.031.100,00\r\n\t\t\t\r\n\t\t\t\t2021.041.100,00\r\n\t\t\t\r\n\t\t\t\t2021.051.100,00\r\n\t\t\t\r\n\t\t\t\t2021.061.100,00\r\n\t\t\t\r\n\t\t\t\t2021.071.100,00\r\n\t\t\t\r\n\t\t\t\t2021.081.100,00\r\n\t\t\t\r\n\t\t\t\t2021.091.100,00\r\n\t\t\t\r\n\t\t\t\t2021.101.100,00\r\n\t\t\t\r\n\t\t\t\t2021.111.100,00\r\n\t\t\t\r\n\t\t\t\t2021.121.100,00\r\n\t\t\t\r\n\t\t\t\t2022.011.212,00\r\n\t\t\t\r\n\t\t\t\t2022.021.212,00\r\n\t\t\t\r\n\t\t\t\t2022.031.212,00\r\n\t\t\t\r\n\t\t\t\t2022.041.212,00\r\n\t\t\t\r\n\t\t\t\t2022.051.212,00\r\n\t\t\t\r\n\t\t\t\t2022.061.212,00\r\n\t\t\t\r\n\t\t\t\t2022.071.212,00\r\n\t\t\t\r\n\t\t\t\t2022.081.212,00\r\n\t\t\t\r\n\t\t\t\t2022.091.212,00\r\n\t\t\t\r\n\t\t\t\t2022.101.212,00\r\n\t\t\t\r\n\t\t\t\t2022.111.212,00\r\n\t\t\t\r\n\t\t\t\t2022.121.212,00\r\n\t\t\t\r\n\t\t\t\t2023.011.302,00\r\n\t\t\t\r\n\t\t\t\t2023.021.302,00\r\n\t\t\t\r\n\t\t\t\t2023.031.302,00\r\n\t\t\t\r\n\t\t\t\t2023.041.302,00\r\n\t\t\t\r\n\t\t\r\n\t\t\t\r\n\t\t\t\tLoading…\r\n\t\t\t\r\n\t\t\r\n\r\n\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\r\n\t\r\n\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tData\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tSalário mínimo vigente\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t1940.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1940.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1941.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.078,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.088,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.098,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.108,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.118,7273E-14\r\n\t\t\t\r\n\t\t\t\t1942.128,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.018,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.028,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.038,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.048,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.058,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.068,7273E-14\r\n\t\t\t\r\n\t\t\t\t1943.071,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.081,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.091,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.101,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.111,0909E-13\r\n\t\t\t\r\n\t\t\t\t1943.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1944.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1945.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1946.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1947.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1948.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1949.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1950.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.011,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.021,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.031,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.041,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.051,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.061,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.071,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.081,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.091,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.101,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.111,3818E-13\r\n\t\t\t\r\n\t\t\t\t1951.121,3818E-13\r\n\t\t\t\r\n\t\t\t\t1952.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.074,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.084,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.094,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.104,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.114,3636E-13\r\n\t\t\t\r\n\t\t\t\t1952.124,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.074,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.084,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.094,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.104,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.114,3636E-13\r\n\t\t\t\r\n\t\t\t\t1953.124,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.014,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.024,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.034,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.044,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.054,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.064,3636E-13\r\n\t\t\t\r\n\t\t\t\t1954.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.088,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.098,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.108,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.118,7273E-13\r\n\t\t\t\r\n\t\t\t\t1954.128,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.018,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.028,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.038,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.048,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.058,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.068,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.088,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.098,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.108,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.118,7273E-13\r\n\t\t\t\r\n\t\t\t\t1955.128,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.018,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.028,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.038,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.048,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.058,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.068,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.078,7273E-13\r\n\t\t\t\r\n\t\t\t\t1956.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1956.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.011,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.021,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.031,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.041,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.051,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.061,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.071,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1957.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.011,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.021,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.031,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.041,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.051,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.061,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.071,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.081,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.091,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.101,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.111,3818E-12\r\n\t\t\t\r\n\t\t\t\t1958.121,3818E-12\r\n\t\t\t\r\n\t\t\t\t1959.012,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.022,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.032,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.042,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.052,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.062,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.072,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.082,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.092,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.102,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.112,1818E-12\r\n\t\t\t\r\n\t\t\t\t1959.122,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.012,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.022,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.032,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.042,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.052,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.062,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.072,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.082,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.092,1818E-12\r\n\t\t\t\r\n\t\t\t\t1960.103,4909E-12\r\n\t\t\t\r\n\t\t\t\t1960.113,4909E-12\r\n\t\t\t\r\n\t\t\t\t1960.123,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.013,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.023,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.033,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.043,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.053,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.063,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.073,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.083,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.093,4909E-12\r\n\t\t\t\r\n\t\t\t\t1961.104,8873E-12\r\n\t\t\t\r\n\t\t\t\t1961.114,8873E-12\r\n\t\t\t\r\n\t\t\t\t1961.124,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.014,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.024,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.034,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.044,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.054,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.064,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.074,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.084,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.094,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.104,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.114,8873E-12\r\n\t\t\t\r\n\t\t\t\t1962.124,8873E-12\r\n\t\t\t\r\n\t\t\t\t1963.017,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.027,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.037,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.047,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.057,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.067,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.077,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.087,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.097,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.107,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.117,6364E-12\r\n\t\t\t\r\n\t\t\t\t1963.127,6364E-12\r\n\t\t\t\r\n\t\t\t\t1964.017,6364E-12\r\n\t\t\t\r\n\t\t\t\t1964.021,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.031,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.041,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.051,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.061,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.071,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.081,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.091,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.101,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.111,5273E-11\r\n\t\t\t\r\n\t\t\t\t1964.121,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.011,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.021,5273E-11\r\n\t\t\t\r\n\t\t\t\t1965.032,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.042,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.052,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.062,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.072,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.082,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.092,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.102,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.112,4000E-11\r\n\t\t\t\r\n\t\t\t\t1965.122,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.012,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.022,4000E-11\r\n\t\t\t\r\n\t\t\t\t1966.033,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.043,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.053,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.063,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.073,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.083,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.093,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.103,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.113,0545E-11\r\n\t\t\t\r\n\t\t\t\t1966.123,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.013,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.023,0545E-11\r\n\t\t\t\r\n\t\t\t\t1967.033,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.043,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.053,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.063,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.073,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.083,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.093,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.103,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.113,8182E-11\r\n\t\t\t\r\n\t\t\t\t1967.123,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.013,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.023,8182E-11\r\n\t\t\t\r\n\t\t\t\t1968.034,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.044,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.054,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.064,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.074,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.084,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.094,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.104,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.114,7127E-11\r\n\t\t\t\r\n\t\t\t\t1968.124,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.014,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.024,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.034,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.044,7127E-11\r\n\t\t\t\r\n\t\t\t\t1969.055,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.065,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.075,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.085,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.095,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.105,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.115,6727E-11\r\n\t\t\t\r\n\t\t\t\t1969.125,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.015,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.025,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.035,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.045,6727E-11\r\n\t\t\t\r\n\t\t\t\t1970.056,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.066,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.076,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.086,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.096,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.106,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.116,8073E-11\r\n\t\t\t\r\n\t\t\t\t1970.126,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.016,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.026,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.036,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.046,8073E-11\r\n\t\t\t\r\n\t\t\t\t1971.058,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.068,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.078,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.088,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.098,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.108,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.118,2036E-11\r\n\t\t\t\r\n\t\t\t\t1971.128,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.018,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.028,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.038,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.048,2036E-11\r\n\t\t\t\r\n\t\t\t\t1972.059,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.069,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.079,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.089,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.099,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.109,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.119,7745E-11\r\n\t\t\t\r\n\t\t\t\t1972.129,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.019,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.029,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.039,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.049,7745E-11\r\n\t\t\t\r\n\t\t\t\t1973.051,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.061,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.071,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.081,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.091,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.101,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.111,1345E-10\r\n\t\t\t\r\n\t\t\t\t1973.121,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.011,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.021,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.031,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.041,1345E-10\r\n\t\t\t\r\n\t\t\t\t1974.051,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.061,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.071,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.081,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.091,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.101,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.111,3702E-10\r\n\t\t\t\r\n\t\t\t\t1974.121,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.011,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.021,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.031,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.041,5098E-10\r\n\t\t\t\r\n\t\t\t\t1975.051,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.061,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.071,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.081,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.091,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.101,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.111,9375E-10\r\n\t\t\t\r\n\t\t\t\t1975.121,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.011,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.021,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.031,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.041,9375E-10\r\n\t\t\t\r\n\t\t\t\t1976.052,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.062,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.072,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.082,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.092,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.102,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.112,7927E-10\r\n\t\t\t\r\n\t\t\t\t1976.122,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.012,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.022,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.032,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.042,7927E-10\r\n\t\t\t\r\n\t\t\t\t1977.054,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.064,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.074,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.084,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.094,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.104,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.114,0233E-10\r\n\t\t\t\r\n\t\t\t\t1977.124,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.014,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.024,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.034,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.044,0233E-10\r\n\t\t\t\r\n\t\t\t\t1978.055,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.065,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.075,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.085,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.095,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.105,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.115,6727E-10\r\n\t\t\t\r\n\t\t\t\t1978.125,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.015,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.025,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.035,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.045,6727E-10\r\n\t\t\t\r\n\t\t\t\t1979.058,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.068,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.078,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.088,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.098,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.108,2473E-10\r\n\t\t\t\r\n\t\t\t\t1979.111,0665E-09\r\n\t\t\t\r\n\t\t\t\t1979.121,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.011,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.021,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.031,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.041,0665E-09\r\n\t\t\t\r\n\t\t\t\t1980.051,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.061,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.071,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.081,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.091,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.101,5089E-09\r\n\t\t\t\r\n\t\t\t\t1980.112,1050E-09\r\n\t\t\t\r\n\t\t\t\t1980.122,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.012,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.022,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.032,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.042,1050E-09\r\n\t\t\t\r\n\t\t\t\t1981.053,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.063,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.073,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.083,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.093,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.103,0781E-09\r\n\t\t\t\r\n\t\t\t\t1981.114,3375E-09\r\n\t\t\t\r\n\t\t\t\t1981.124,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.014,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.024,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.034,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.044,3375E-09\r\n\t\t\t\r\n\t\t\t\t1982.056,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.066,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.076,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.086,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.096,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.106,0393E-09\r\n\t\t\t\r\n\t\t\t\t1982.118,5702E-09\r\n\t\t\t\r\n\t\t\t\t1982.128,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.018,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.028,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.038,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.048,5702E-09\r\n\t\t\t\r\n\t\t\t\t1983.051,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.061,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.071,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.081,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.091,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.101,2646E-08\r\n\t\t\t\r\n\t\t\t\t1983.112,0771E-08\r\n\t\t\t\r\n\t\t\t\t1983.122,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.012,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.022,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.032,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.042,0771E-08\r\n\t\t\t\r\n\t\t\t\t1984.053,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.063,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.073,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.083,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.093,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.103,5337E-08\r\n\t\t\t\r\n\t\t\t\t1984.116,0567E-08\r\n\t\t\t\r\n\t\t\t\t1984.126,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.016,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.026,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.036,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.046,0567E-08\r\n\t\t\t\r\n\t\t\t\t1985.051,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.061,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.071,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.081,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.091,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.101,2113E-07\r\n\t\t\t\r\n\t\t\t\t1985.112,1818E-07\r\n\t\t\t\r\n\t\t\t\t1985.122,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.012,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.022,1818E-07\r\n\t\t\t\r\n\t\t\t\t1986.032,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.042,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.052,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.062,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.072,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.082,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.092,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.102,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.112,9236E-07\r\n\t\t\t\r\n\t\t\t\t1986.122,9236E-07\r\n\t\t\t\r\n\t\t\t\t1987.013,5084E-07\r\n\t\t\t\r\n\t\t\t\t1987.023,5084E-07\r\n\t\t\t\r\n\t\t\t\t1987.034,9745E-07\r\n\t\t\t\r\n\t\t\t\t1987.044,9745E-07\r\n\t\t\t\r\n\t\t\t\t1987.055,9695E-07\r\n\t\t\t\r\n\t\t\t\t1987.067,1633E-07\r\n\t\t\t\r\n\t\t\t\t1987.077,1633E-07\r\n\t\t\t\r\n\t\t\t\t1987.087,1636E-07\r\n\t\t\t\r\n\t\t\t\t1987.098,7273E-07\r\n\t\t\t\r\n\t\t\t\t1987.109,6000E-07\r\n\t\t\t\r\n\t\t\t\t1987.111,0909E-06\r\n\t\t\t\r\n\t\t\t\t1987.121,3091E-06\r\n\t\t\t\r\n\t\t\t\t1988.011,6364E-06\r\n\t\t\t\r\n\t\t\t\t1988.021,9200E-06\r\n\t\t\t\r\n\t\t\t\t1988.032,2691E-06\r\n\t\t\t\r\n\t\t\t\t1988.042,6400E-06\r\n\t\t\t\r\n\t\t\t\t1988.053,1680E-06\r\n\t\t\t\r\n\t\t\t\t1988.063,7702E-06\r\n\t\t\t\r\n\t\t\t\t1988.074,5251E-06\r\n\t\t\t\r\n\t\t\t\t1988.085,6553E-06\r\n\t\t\t\r\n\t\t\t\t1988.096,8945E-06\r\n\t\t\t\r\n\t\t\t\t1988.108,6182E-06\r\n\t\t\t\r\n\t\t\t\t1988.111,1200E-05\r\n\t\t\t\r\n\t\t\t\t1988.121,4700E-05\r\n\t\t\t\r\n\t\t\t\t1989.011,9772E-05\r\n\t\t\t\r\n\t\t\t\t1989.022,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.032,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.042,3236E-05\r\n\t\t\t\r\n\t\t\t\t1989.052,9600E-05\r\n\t\t\t\r\n\t\t\t\t1989.064,3636E-05\r\n\t\t\t\r\n\t\t\t\t1989.075,4473E-05\r\n\t\t\t\r\n\t\t\t\t1989.087,0138E-05\r\n\t\t\t\r\n\t\t\t\t1989.099,0720E-05\r\n\t\t\t\r\n\t\t\t\t1989.101,3881E-04\r\n\t\t\t\r\n\t\t\t\t1989.112,0267E-04\r\n\t\t\t\r\n\t\t\t\t1989.122,8661E-04\r\n\t\t\t\r\n\t\t\t\t1990.014,6689E-04\r\n\t\t\t\r\n\t\t\t\t1990.027,2886E-04\r\n\t\t\t\r\n\t\t\t\t1990.031,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.041,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.051,3360E-03\r\n\t\t\t\r\n\t\t\t\t1990.061,4028E-03\r\n\t\t\t\r\n\t\t\t\t1990.071,7835E-03\r\n\t\t\t\r\n\t\t\t\t1990.081,8922E-03\r\n\t\t\t\r\n\t\t\t\t1990.092,2023E-03\r\n\t\t\t\r\n\t\t\t\t1990.102,3364E-03\r\n\t\t\t\r\n\t\t\t\t1990.113,0289E-03\r\n\t\t\t\r\n\t\t\t\t1990.123,2134E-03\r\n\t\t\t\r\n\t\t\t\t1991.014,4820E-03\r\n\t\t\t\r\n\t\t\t\t1991.020,01\r\n\t\t\t\r\n\t\t\t\t1991.030,01\r\n\t\t\t\r\n\t\t\t\t1991.040,01\r\n\t\t\t\r\n\t\t\t\t1991.050,01\r\n\t\t\t\r\n\t\t\t\t1991.060,01\r\n\t\t\t\r\n\t\t\t\t1991.070,01\r\n\t\t\t\r\n\t\t\t\t1991.080,01\r\n\t\t\t\r\n\t\t\t\t1991.090,02\r\n\t\t\t\r\n\t\t\t\t1991.100,02\r\n\t\t\t\r\n\t\t\t\t1991.110,02\r\n\t\t\t\r\n\t\t\t\t1991.120,02\r\n\t\t\t\r\n\t\t\t\t1992.010,03\r\n\t\t\t\r\n\t\t\t\t1992.020,03\r\n\t\t\t\r\n\t\t\t\t1992.030,03\r\n\t\t\t\r\n\t\t\t\t1992.040,03\r\n\t\t\t\r\n\t\t\t\t1992.050,08\r\n\t\t\t\r\n\t\t\t\t1992.060,08\r\n\t\t\t\r\n\t\t\t\t1992.070,08\r\n\t\t\t\r\n\t\t\t\t1992.080,08\r\n\t\t\t\r\n\t\t\t\t1992.090,19\r\n\t\t\t\r\n\t\t\t\t1992.100,19\r\n\t\t\t\r\n\t\t\t\t1992.110,19\r\n\t\t\t\r\n\t\t\t\t1992.120,19\r\n\t\t\t\r\n\t\t\t\t1993.010,45\r\n\t\t\t\r\n\t\t\t\t1993.020,45\r\n\t\t\t\r\n\t\t\t\t1993.030,62\r\n\t\t\t\r\n\t\t\t\t1993.040,62\r\n\t\t\t\r\n\t\t\t\t1993.051,20\r\n\t\t\t\r\n\t\t\t\t1993.061,20\r\n\t\t\t\r\n\t\t\t\t1993.071,69\r\n\t\t\t\r\n\t\t\t\t1993.082,01\r\n\t\t\t\r\n\t\t\t\t1993.093,49\r\n\t\t\t\r\n\t\t\t\t1993.104,37\r\n\t\t\t\r\n\t\t\t\t1993.115,46\r\n\t\t\t\r\n\t\t\t\t1993.126,82\r\n\t\t\t\r\n\t\t\t\t1994.0111,96\r\n\t\t\t\r\n\t\t\t\t1994.0215,57\r\n\t\t\t\r\n\t\t\t\t1994.0318,29\r\n\t\t\t\r\n\t\t\t\t1994.0426,01\r\n\t\t\t\r\n\t\t\t\t1994.0537,41\r\n\t\t\t\r\n\t\t\t\t1994.0653,68\r\n\t\t\t\r\n\t\t\t\t1994.0764,79\r\n\t\t\t\r\n\t\t\t\t1994.0864,79\r\n\t\t\t\r\n\t\t\t\t1994.0970,00\r\n\t\t\t\r\n\t\t\t\t1994.1070,00\r\n\t\t\t\r\n\t\t\t\t1994.1170,00\r\n\t\t\t\r\n\t\t\t\t1994.1270,00\r\n\t\t\t\r\n\t\t\t\t1995.0170,00\r\n\t\t\t\r\n\t\t\t\t1995.0270,00\r\n\t\t\t\r\n\t\t\t\t1995.0370,00\r\n\t\t\t\r\n\t\t\t\t1995.0470,00\r\n\t\t\t\r\n\t\t\t\t1995.05100,00\r\n\t\t\t\r\n\t\t\t\t1995.06100,00\r\n\t\t\t\r\n\t\t\t\t1995.07100,00\r\n\t\t\t\r\n\t\t\t\t1995.08100,00\r\n\t\t\t\r\n\t\t\t\t1995.09100,00\r\n\t\t\t\r\n\t\t\t\t1995.10100,00\r\n\t\t\t\r\n\t\t\t\t1995.11100,00\r\n\t\t\t\r\n\t\t\t\t1995.12100,00\r\n\t\t\t\r\n\t\t\t\t1996.01100,00\r\n\t\t\t\r\n\t\t\t\t1996.02100,00\r\n\t\t\t\r\n\t\t\t\t1996.03100,00\r\n\t\t\t\r\n\t\t\t\t1996.04100,00\r\n\t\t\t\r\n\t\t\t\t1996.05112,00\r\n\t\t\t\r\n\t\t\t\t1996.06112,00\r\n\t\t\t\r\n\t\t\t\t1996.07112,00\r\n\t\t\t\r\n\t\t\t\t1996.08112,00\r\n\t\t\t\r\n\t\t\t\t1996.09112,00\r\n\t\t\t\r\n\t\t\t\t1996.10112,00\r\n\t\t\t\r\n\t\t\t\t1996.11112,00\r\n\t\t\t\r\n\t\t\t\t1996.12112,00\r\n\t\t\t\r\n\t\t\t\t1997.01112,00\r\n\t\t\t\r\n\t\t\t\t1997.02112,00\r\n\t\t\t\r\n\t\t\t\t1997.03112,00\r\n\t\t\t\r\n\t\t\t\t1997.04112,00\r\n\t\t\t\r\n\t\t\t\t1997.05120,00\r\n\t\t\t\r\n\t\t\t\t1997.06120,00\r\n\t\t\t\r\n\t\t\t\t1997.07120,00\r\n\t\t\t\r\n\t\t\t\t1997.08120,00\r\n\t\t\t\r\n\t\t\t\t1997.09120,00\r\n\t\t\t\r\n\t\t\t\t1997.10120,00\r\n\t\t\t\r\n\t\t\t\t1997.11120,00\r\n\t\t\t\r\n\t\t\t\t1997.12120,00\r\n\t\t\t\r\n\t\t\t\t1998.01120,00\r\n\t\t\t\r\n\t\t\t\t1998.02120,00\r\n\t\t\t\r\n\t\t\t\t1998.03120,00\r\n\t\t\t\r\n\t\t\t\t1998.04120,00\r\n\t\t\t\r\n\t\t\t\t1998.05130,00\r\n\t\t\t\r\n\t\t\t\t1998.06130,00\r\n\t\t\t\r\n\t\t\t\t1998.07130,00\r\n\t\t\t\r\n\t\t\t\t1998.08130,00\r\n\t\t\t\r\n\t\t\t\t1998.09130,00\r\n\t\t\t\r\n\t\t\t\t1998.10130,00\r\n\t\t\t\r\n\t\t\t\t1998.11130,00\r\n\t\t\t\r\n\t\t\t\t1998.12130,00\r\n\t\t\t\r\n\t\t\t\t1999.01130,00\r\n\t\t\t\r\n\t\t\t\t1999.02130,00\r\n\t\t\t\r\n\t\t\t\t1999.03130,00\r\n\t\t\t\r\n\t\t\t\t1999.04130,00\r\n\t\t\t\r\n\t\t\t\t1999.05136,00\r\n\t\t\t\r\n\t\t\t\t1999.06136,00\r\n\t\t\t\r\n\t\t\t\t1999.07136,00\r\n\t\t\t\r\n\t\t\t\t1999.08136,00\r\n\t\t\t\r\n\t\t\t\t1999.09136,00\r\n\t\t\t\r\n\t\t\t\t1999.10136,00\r\n\t\t\t\r\n\t\t\t\t1999.11136,00\r\n\t\t\t\r\n\t\t\t\t1999.12136,00\r\n\t\t\t\r\n\t\t\t\t2000.01136,00\r\n\t\t\t\r\n\t\t\t\t2000.02136,00\r\n\t\t\t\r\n\t\t\t\t2000.03136,00\r\n\t\t\t\r\n\t\t\t\t2000.04151,00\r\n\t\t\t\r\n\t\t\t\t2000.05151,00\r\n\t\t\t\r\n\t\t\t\t2000.06151,00\r\n\t\t\t\r\n\t\t\t\t2000.07151,00\r\n\t\t\t\r\n\t\t\t\t2000.08151,00\r\n\t\t\t\r\n\t\t\t\t2000.09151,00\r\n\t\t\t\r\n\t\t\t\t2000.10151,00\r\n\t\t\t\r\n\t\t\t\t2000.11151,00\r\n\t\t\t\r\n\t\t\t\t2000.12151,00\r\n\t\t\t\r\n\t\t\t\t2001.01151,00\r\n\t\t\t\r\n\t\t\t\t2001.02151,00\r\n\t\t\t\r\n\t\t\t\t2001.03151,00\r\n\t\t\t\r\n\t\t\t\t2001.04180,00\r\n\t\t\t\r\n\t\t\t\t2001.05180,00\r\n\t\t\t\r\n\t\t\t\t2001.06180,00\r\n\t\t\t\r\n\t\t\t\t2001.07180,00\r\n\t\t\t\r\n\t\t\t\t2001.08180,00\r\n\t\t\t\r\n\t\t\t\t2001.09180,00\r\n\t\t\t\r\n\t\t\t\t2001.10180,00\r\n\t\t\t\r\n\t\t\t\t2001.11180,00\r\n\t\t\t\r\n\t\t\t\t2001.12180,00\r\n\t\t\t\r\n\t\t\t\t2002.01180,00\r\n\t\t\t\r\n\t\t\t\t2002.02180,00\r\n\t\t\t\r\n\t\t\t\t2002.03180,00\r\n\t\t\t\r\n\t\t\t\t2002.04200,00\r\n\t\t\t\r\n\t\t\t\t2002.05200,00\r\n\t\t\t\r\n\t\t\t\t2002.06200,00\r\n\t\t\t\r\n\t\t\t\t2002.07200,00\r\n\t\t\t\r\n\t\t\t\t2002.08200,00\r\n\t\t\t\r\n\t\t\t\t2002.09200,00\r\n\t\t\t\r\n\t\t\t\t2002.10200,00\r\n\t\t\t\r\n\t\t\t\t2002.11200,00\r\n\t\t\t\r\n\t\t\t\t2002.12200,00\r\n\t\t\t\r\n\t\t\t\t2003.01200,00\r\n\t\t\t\r\n\t\t\t\t2003.02200,00\r\n\t\t\t\r\n\t\t\t\t2003.03200,00\r\n\t\t\t\r\n\t\t\t\t2003.04240,00\r\n\t\t\t\r\n\t\t\t\t2003.05240,00\r\n\t\t\t\r\n\t\t\t\t2003.06240,00\r\n\t\t\t\r\n\t\t\t\t2003.07240,00\r\n\t\t\t\r\n\t\t\t\t2003.08240,00\r\n\t\t\t\r\n\t\t\t\t2003.09240,00\r\n\t\t\t\r\n\t\t\t\t2003.10240,00\r\n\t\t\t\r\n\t\t\t\t2003.11240,00\r\n\t\t\t\r\n\t\t\t\t2003.12240,00\r\n\t\t\t\r\n\t\t\t\t2004.01240,00\r\n\t\t\t\r\n\t\t\t\t2004.02240,00\r\n\t\t\t\r\n\t\t\t\t2004.03240,00\r\n\t\t\t\r\n\t\t\t\t2004.04240,00\r\n\t\t\t\r\n\t\t\t\t2004.05260,00\r\n\t\t\t\r\n\t\t\t\t2004.06260,00\r\n\t\t\t\r\n\t\t\t\t2004.07260,00\r\n\t\t\t\r\n\t\t\t\t2004.08260,00\r\n\t\t\t\r\n\t\t\t\t2004.09260,00\r\n\t\t\t\r\n\t\t\t\t2004.10260,00\r\n\t\t\t\r\n\t\t\t\t2004.11260,00\r\n\t\t\t\r\n\t\t\t\t2004.12260,00\r\n\t\t\t\r\n\t\t\t\t2005.01260,00\r\n\t\t\t\r\n\t\t\t\t2005.02260,00\r\n\t\t\t\r\n\t\t\t\t2005.03260,00\r\n\t\t\t\r\n\t\t\t\t2005.04260,00\r\n\t\t\t\r\n\t\t\t\t2005.05300,00\r\n\t\t\t\r\n\t\t\t\t2005.06300,00\r\n\t\t\t\r\n\t\t\t\t2005.07300,00\r\n\t\t\t\r\n\t\t\t\t2005.08300,00\r\n\t\t\t\r\n\t\t\t\t2005.09300,00\r\n\t\t\t\r\n\t\t\t\t2005.10300,00\r\n\t\t\t\r\n\t\t\t\t2005.11300,00\r\n\t\t\t\r\n\t\t\t\t2005.12300,00\r\n\t\t\t\r\n\t\t\t\t2006.01300,00\r\n\t\t\t\r\n\t\t\t\t2006.02300,00\r\n\t\t\t\r\n\t\t\t\t2006.03300,00\r\n\t\t\t\r\n\t\t\t\t2006.04350,00\r\n\t\t\t\r\n\t\t\t\t2006.05350,00\r\n\t\t\t\r\n\t\t\t\t2006.06350,00\r\n\t\t\t\r\n\t\t\t\t2006.07350,00\r\n\t\t\t\r\n\t\t\t\t2006.08350,00\r\n\t\t\t\r\n\t\t\t\t2006.09350,00\r\n\t\t\t\r\n\t\t\t\t2006.10350,00\r\n\t\t\t\r\n\t\t\t\t2006.11350,00\r\n\t\t\t\r\n\t\t\t\t2006.12350,00\r\n\t\t\t\r\n\t\t\t\t2007.01350,00\r\n\t\t\t\r\n\t\t\t\t2007.02350,00\r\n\t\t\t\r\n\t\t\t\t2007.03350,00\r\n\t\t\t\r\n\t\t\t\t2007.04380,00\r\n\t\t\t\r\n\t\t\t\t2007.05380,00\r\n\t\t\t\r\n\t\t\t\t2007.06380,00\r\n\t\t\t\r\n\t\t\t\t2007.07380,00\r\n\t\t\t\r\n\t\t\t\t2007.08380,00\r\n\t\t\t\r\n\t\t\t\t2007.09380,00\r\n\t\t\t\r\n\t\t\t\t2007.10380,00\r\n\t\t\t\r\n\t\t\t\t2007.11380,00\r\n\t\t\t\r\n\t\t\t\t2007.12380,00\r\n\t\t\t\r\n\t\t\t\t2008.01380,00\r\n\t\t\t\r\n\t\t\t\t2008.02380,00\r\n\t\t\t\r\n\t\t\t\t2008.03415,00\r\n\t\t\t\r\n\t\t\t\t2008.04415,00\r\n\t\t\t\r\n\t\t\t\t2008.05415,00\r\n\t\t\t\r\n\t\t\t\t2008.06415,00\r\n\t\t\t\r\n\t\t\t\t2008.07415,00\r\n\t\t\t\r\n\t\t\t\t2008.08415,00\r\n\t\t\t\r\n\t\t\t\t2008.09415,00\r\n\t\t\t\r\n\t\t\t\t2008.10415,00\r\n\t\t\t\r\n\t\t\t\t2008.11415,00\r\n\t\t\t\r\n\t\t\t\t2008.12415,00\r\n\t\t\t\r\n\t\t\t\t2009.01415,00\r\n\t\t\t\r\n\t\t\t\t2009.02465,00\r\n\t\t\t\r\n\t\t\t\t2009.03465,00\r\n\t\t\t\r\n\t\t\t\t2009.04465,00\r\n\t\t\t\r\n\t\t\t\t2009.05465,00\r\n\t\t\t\r\n\t\t\t\t2009.06465,00\r\n\t\t\t\r\n\t\t\t\t2009.07465,00\r\n\t\t\t\r\n\t\t\t\t2009.08465,00\r\n\t\t\t\r\n\t\t\t\t2009.09465,00\r\n\t\t\t\r\n\t\t\t\t2009.10465,00\r\n\t\t\t\r\n\t\t\t\t2009.11465,00\r\n\t\t\t\r\n\t\t\t\t2009.12465,00\r\n\t\t\t\r\n\t\t\t\t2010.01510,00\r\n\t\t\t\r\n\t\t\t\t2010.02510,00\r\n\t\t\t\r\n\t\t\t\t2010.03510,00\r\n\t\t\t\r\n\t\t\t\t2010.04510,00\r\n\t\t\t\r\n\t\t\t\t2010.05510,00\r\n\t\t\t\r\n\t\t\t\t2010.06510,00\r\n\t\t\t\r\n\t\t\t\t2010.07510,00\r\n\t\t\t\r\n\t\t\t\t2010.08510,00\r\n\t\t\t\r\n\t\t\t\t2010.09510,00\r\n\t\t\t\r\n\t\t\t\t2010.10510,00\r\n\t\t\t\r\n\t\t\t\t2010.11510,00\r\n\t\t\t\r\n\t\t\t\t2010.12510,00\r\n\t\t\t\r\n\t\t\t\t2011.01540,00\r\n\t\t\t\r\n\t\t\t\t2011.02540,00\r\n\t\t\t\r\n\t\t\t\t2011.03545,00\r\n\t\t\t\r\n\t\t\t\t2011.04545,00\r\n\t\t\t\r\n\t\t\t\t2011.05545,00\r\n\t\t\t\r\n\t\t\t\t2011.06545,00\r\n\t\t\t\r\n\t\t\t\t2011.07545,00\r\n\t\t\t\r\n\t\t\t\t2011.08545,00\r\n\t\t\t\r\n\t\t\t\t2011.09545,00\r\n\t\t\t\r\n\t\t\t\t2011.10545,00\r\n\t\t\t\r\n\t\t\t\t2011.11545,00\r\n\t\t\t\r\n\t\t\t\t2011.12545,00\r\n\t\t\t\r\n\t\t\t\t2012.01622,00\r\n\t\t\t\r\n\t\t\t\t2012.02622,00\r\n\t\t\t\r\n\t\t\t\t2012.03622,00\r\n\t\t\t\r\n\t\t\t\t2012.04622,00\r\n\t\t\t\r\n\t\t\t\t2012.05622,00\r\n\t\t\t\r\n\t\t\t\t2012.06622,00\r\n\t\t\t\r\n\t\t\t\t2012.07622,00\r\n\t\t\t\r\n\t\t\t\t2012.08622,00\r\n\t\t\t\r\n\t\t\t\t2012.09622,00\r\n\t\t\t\r\n\t\t\t\t2012.10622,00\r\n\t\t\t\r\n\t\t\t\t2012.11622,00\r\n\t\t\t\r\n\t\t\t\t2012.12622,00\r\n\t\t\t\r\n\t\t\t\t2013.01678,00\r\n\t\t\t\r\n\t\t\t\t2013.02678,00\r\n\t\t\t\r\n\t\t\t\t2013.03678,00\r\n\t\t\t\r\n\t\t\t\t2013.04678,00\r\n\t\t\t\r\n\t\t\t\t2013.05678,00\r\n\t\t\t\r\n\t\t\t\t2013.06678,00\r\n\t\t\t\r\n\t\t\t\t2013.07678,00\r\n\t\t\t\r\n\t\t\t\t2013.08678,00\r\n\t\t\t\r\n\t\t\t\t2013.09678,00\r\n\t\t\t\r\n\t\t\t\t2013.10678,00\r\n\t\t\t\r\n\t\t\t\t2013.11678,00\r\n\t\t\t\r\n\t\t\t\t2013.12678,00\r\n\t\t\t\r\n\t\t\t\t2014.01724,00\r\n\t\t\t\r\n\t\t\t\t2014.02724,00\r\n\t\t\t\r\n\t\t\t\t2014.03724,00\r\n\t\t\t\r\n\t\t\t\t2014.04724,00\r\n\t\t\t\r\n\t\t\t\t2014.05724,00\r\n\t\t\t\r\n\t\t\t\t2014.06724,00\r\n\t\t\t\r\n\t\t\t\t2014.07724,00\r\n\t\t\t\r\n\t\t\t\t2014.08724,00\r\n\t\t\t\r\n\t\t\t\t2014.09724,00\r\n\t\t\t\r\n\t\t\t\t2014.10724,00\r\n\t\t\t\r\n\t\t\t\t2014.11724,00\r\n\t\t\t\r\n\t\t\t\t2014.12724,00\r\n\t\t\t\r\n\t\t\t\t2015.01788,00\r\n\t\t\t\r\n\t\t\t\t2015.02788,00\r\n\t\t\t\r\n\t\t\t\t2015.03788,00\r\n\t\t\t\r\n\t\t\t\t2015.04788,00\r\n\t\t\t\r\n\t\t\t\t2015.05788,00\r\n\t\t\t\r\n\t\t\t\t2015.06788,00\r\n\t\t\t\r\n\t\t\t\t2015.07788,00\r\n\t\t\t\r\n\t\t\t\t2015.08788,00\r\n\t\t\t\r\n\t\t\t\t2015.09788,00\r\n\t\t\t\r\n\t\t\t\t2015.10788,00\r\n\t\t\t\r\n\t\t\t\t2015.11788,00\r\n\t\t\t\r\n\t\t\t\t2015.12788,00\r\n\t\t\t\r\n\t\t\t\t2016.01880,00\r\n\t\t\t\r\n\t\t\t\t2016.02880,00\r\n\t\t\t\r\n\t\t\t\t2016.03880,00\r\n\t\t\t\r\n\t\t\t\t2016.04880,00\r\n\t\t\t\r\n\t\t\t\t2016.05880,00\r\n\t\t\t\r\n\t\t\t\t2016.06880,00\r\n\t\t\t\r\n\t\t\t\t2016.07880,00\r\n\t\t\t\r\n\t\t\t\t2016.08880,00\r\n\t\t\t\r\n\t\t\t\t2016.09880,00\r\n\t\t\t\r\n\t\t\t\t2016.10880,00\r\n\t\t\t\r\n\t\t\t\t2016.11880,00\r\n\t\t\t\r\n\t\t\t\t2016.12880,00\r\n\t\t\t\r\n\t\t\t\t2017.01937,00\r\n\t\t\t\r\n\t\t\t\t2017.02937,00\r\n\t\t\t\r\n\t\t\t\t2017.03937,00\r\n\t\t\t\r\n\t\t\t\t2017.04937,00\r\n\t\t\t\r\n\t\t\t\t2017.05937,00\r\n\t\t\t\r\n\t\t\t\t2017.06937,00\r\n\t\t\t\r\n\t\t\t\t2017.07937,00\r\n\t\t\t\r\n\t\t\t\t2017.08937,00\r\n\t\t\t\r\n\t\t\t\t2017.09937,00\r\n\t\t\t\r\n\t\t\t\t2017.10937,00\r\n\t\t\t\r\n\t\t\t\t2017.11937,00\r\n\t\t\t\r\n\t\t\t\t2017.12937,00\r\n\t\t\t\r\n\t\t\t\t2018.01954,00\r\n\t\t\t\r\n\t\t\t\t2018.02954,00\r\n\t\t\t\r\n\t\t\t\t2018.03954,00\r\n\t\t\t\r\n\t\t\t\t2018.04954,00\r\n\t\t\t\r\n\t\t\t\t2018.05954,00\r\n\t\t\t\r\n\t\t\t\t2018.06954,00\r\n\t\t\t\r\n\t\t\t\t2018.07954,00\r\n\t\t\t\r\n\t\t\t\t2018.08954,00\r\n\t\t\t\r\n\t\t\t\t2018.09954,00\r\n\t\t\t\r\n\t\t\t\t2018.10954,00\r\n\t\t\t\r\n\t\t\t\t2018.11954,00\r\n\t\t\t\r\n\t\t\t\t2018.12954,00\r\n\t\t\t\r\n\t\t\t\t2019.01998,00\r\n\t\t\t\r\n\t\t\t\t2019.02998,00\r\n\t\t\t\r\n\t\t\t\t2019.03998,00\r\n\t\t\t\r\n\t\t\t\t2019.04998,00\r\n\t\t\t\r\n\t\t\t\t2019.05998,00\r\n\t\t\t\r\n\t\t\t\t2019.06998,00\r\n\t\t\t\r\n\t\t\t\t2019.07998,00\r\n\t\t\t\r\n\t\t\t\t2019.08998,00\r\n\t\t\t\r\n\t\t\t\t2019.09998,00\r\n\t\t\t\r\n\t\t\t\t2019.10998,00\r\n\t\t\t\r\n\t\t\t\t2019.11998,00\r\n\t\t\t\r\n\t\t\t\t2019.12998,00\r\n\t\t\t\r\n\t\t\t\t2020.011.039,00\r\n\t\t\t\r\n\t\t\t\t2020.021.045,00\r\n\t\t\t\r\n\t\t\t\t2020.031.045,00\r\n\t\t\t\r\n\t\t\t\t2020.041.045,00\r\n\t\t\t\r\n\t\t\t\t2020.051.045,00\r\n\t\t\t\r\n\t\t\t\t2020.061.045,00\r\n\t\t\t\r\n\t\t\t\t2020.071.045,00\r\n\t\t\t\r\n\t\t\t\t2020.081.045,00\r\n\t\t\t\r\n\t\t\t\t2020.091.045,00\r\n\t\t\t\r\n\t\t\t\t2020.101.045,00\r\n\t\t\t\r\n\t\t\t\t2020.111.045,00\r\n\t\t\t\r\n\t\t\t\t2020.121.045,00\r\n\t\t\t\r\n\t\t\t\t2021.011.100,00\r\n\t\t\t\r\n\t\t\t\t2021.021.100,00\r\n\t\t\t\r\n\t\t\t\t2021.031.100,00\r\n\t\t\t\r\n\t\t\t\t2021.041.100,00\r\n\t\t\t\r\n\t\t\t\t2021.051.100,00\r\n\t\t\t\r\n\t\t\t\t2021.061.100,00\r\n\t\t\t\r\n\t\t\t\t2021.071.100,00\r\n\t\t\t\r\n\t\t\t\t2021.081.100,00\r\n\t\t\t\r\n\t\t\t\t2021.091.100,00\r\n\t\t\t\r\n\t\t\t\t2021.101.100,00\r\n\t\t\t\r\n\t\t\t\t2021.111.100,00\r\n\t\t\t\r\n\t\t\t\t2021.121.100,00\r\n\t\t\t\r\n\t\t\t\t2022.011.212,00\r\n\t\t\t\r\n\t\t\t\t2022.021.212,00\r\n\t\t\t\r\n\t\t\t\t2022.031.212,00\r\n\t\t\t\r\n\t\t\t\t2022.041.212,00\r\n\t\t\t\r\n\t\t\t\t2022.051.212,00\r\n\t\t\t\r\n\t\t\t\t2022.061.212,00\r\n\t\t\t\r\n\t\t\t\t2022.071.212,00\r\n\t\t\t\r\n\t\t\t\t2022.081.212,00\r\n\t\t\t\r\n\t\t\t\t2022.091.212,00\r\n\t\t\t\r\n\t\t\t\t2022.101.212,00\r\n\t\t\t\r\n\t\t\t\t2022.111.212,00\r\n\t\t\t\r\n\t\t\t\t2022.121.212,00\r\n\t\t\t\r\n\t\t\t\t2023.011.302,00\r\n\t\t\t\r\n\t\t\t\t2023.021.302,00\r\n\t\t\t\r\n\t\t\t\t2023.031.302,00\r\n\t\t\t\r\n\t\t\t\t2023.041.302,00\r\n\t\t\t\r\n\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tData\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tSalário mínimo vigente\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\tLoading…
`

export const mockedResult: TResponseData[] = [
  {
    yearMonth: '2023-04',
    salary: 1302
  },
  {
    yearMonth: '2023-03',
    salary: 1302
  },
  {
    yearMonth: '2023-02',
    salary: 1302
  },
  {
    yearMonth: '2023-01',
    salary: 1302
  },
  {
    yearMonth: '2022-12',
    salary: 1212
  },
  {
    yearMonth: '2022-11',
    salary: 1212
  },
  {
    yearMonth: '2022-10',
    salary: 1212
  },
  {
    yearMonth: '2022-09',
    salary: 1212
  },
  {
    yearMonth: '2022-08',
    salary: 1212
  },
  {
    yearMonth: '2022-07',
    salary: 1212
  },
  {
    yearMonth: '2022-06',
    salary: 1212
  },
  {
    yearMonth: '2022-05',
    salary: 1212
  },
  {
    yearMonth: '2022-04',
    salary: 1212
  },
  {
    yearMonth: '2022-03',
    salary: 1212
  },
  {
    yearMonth: '2022-02',
    salary: 1212
  },
  {
    yearMonth: '2022-01',
    salary: 1212
  },
  {
    yearMonth: '2021-12',
    salary: 1100
  },
  {
    yearMonth: '2021-11',
    salary: 1100
  },
  {
    yearMonth: '2021-10',
    salary: 1100
  },
  {
    yearMonth: '2021-09',
    salary: 1100
  },
  {
    yearMonth: '2021-08',
    salary: 1100
  },
  {
    yearMonth: '2021-07',
    salary: 1100
  },
  {
    yearMonth: '2021-06',
    salary: 1100
  },
  {
    yearMonth: '2021-05',
    salary: 1100
  },
  {
    yearMonth: '2021-04',
    salary: 1100
  },
  {
    yearMonth: '2021-03',
    salary: 1100
  },
  {
    yearMonth: '2021-02',
    salary: 1100
  },
  {
    yearMonth: '2021-01',
    salary: 1100
  },
  {
    yearMonth: '2020-12',
    salary: 1045
  },
  {
    yearMonth: '2020-11',
    salary: 1045
  },
  {
    yearMonth: '2020-10',
    salary: 1045
  },
  {
    yearMonth: '2020-09',
    salary: 1045
  },
  {
    yearMonth: '2020-08',
    salary: 1045
  },
  {
    yearMonth: '2020-07',
    salary: 1045
  },
  {
    yearMonth: '2020-06',
    salary: 1045
  },
  {
    yearMonth: '2020-05',
    salary: 1045
  },
  {
    yearMonth: '2020-04',
    salary: 1045
  },
  {
    yearMonth: '2020-03',
    salary: 1045
  },
  {
    yearMonth: '2020-02',
    salary: 1045
  },
  {
    yearMonth: '2020-01',
    salary: 1039
  },
  {
    yearMonth: '2019-12',
    salary: 998
  },
  {
    yearMonth: '2019-11',
    salary: 998
  },
  {
    yearMonth: '2019-10',
    salary: 998
  },
  {
    yearMonth: '2019-09',
    salary: 998
  },
  {
    yearMonth: '2019-08',
    salary: 998
  },
  {
    yearMonth: '2019-07',
    salary: 998
  },
  {
    yearMonth: '2019-06',
    salary: 998
  },
  {
    yearMonth: '2019-05',
    salary: 998
  },
  {
    yearMonth: '2019-04',
    salary: 998
  },
  {
    yearMonth: '2019-03',
    salary: 998
  },
  {
    yearMonth: '2019-02',
    salary: 998
  },
  {
    yearMonth: '2019-01',
    salary: 998
  },
  {
    yearMonth: '2018-12',
    salary: 954
  },
  {
    yearMonth: '2018-11',
    salary: 954
  },
  {
    yearMonth: '2018-10',
    salary: 954
  },
  {
    yearMonth: '2018-09',
    salary: 954
  },
  {
    yearMonth: '2018-08',
    salary: 954
  },
  {
    yearMonth: '2018-07',
    salary: 954
  },
  {
    yearMonth: '2018-06',
    salary: 954
  },
  {
    yearMonth: '2018-05',
    salary: 954
  },
  {
    yearMonth: '2018-04',
    salary: 954
  },
  {
    yearMonth: '2018-03',
    salary: 954
  },
  {
    yearMonth: '2018-02',
    salary: 954
  },
  {
    yearMonth: '2018-01',
    salary: 954
  },
  {
    yearMonth: '2017-12',
    salary: 937
  },
  {
    yearMonth: '2017-11',
    salary: 937
  },
  {
    yearMonth: '2017-10',
    salary: 937
  },
  {
    yearMonth: '2017-09',
    salary: 937
  },
  {
    yearMonth: '2017-08',
    salary: 937
  },
  {
    yearMonth: '2017-07',
    salary: 937
  },
  {
    yearMonth: '2017-06',
    salary: 937
  },
  {
    yearMonth: '2017-05',
    salary: 937
  },
  {
    yearMonth: '2017-04',
    salary: 937
  },
  {
    yearMonth: '2017-03',
    salary: 937
  },
  {
    yearMonth: '2017-02',
    salary: 937
  },
  {
    yearMonth: '2017-01',
    salary: 937
  },
  {
    yearMonth: '2016-12',
    salary: 880
  },
  {
    yearMonth: '2016-11',
    salary: 880
  },
  {
    yearMonth: '2016-10',
    salary: 880
  },
  {
    yearMonth: '2016-09',
    salary: 880
  },
  {
    yearMonth: '2016-08',
    salary: 880
  },
  {
    yearMonth: '2016-07',
    salary: 880
  },
  {
    yearMonth: '2016-06',
    salary: 880
  },
  {
    yearMonth: '2016-05',
    salary: 880
  },
  {
    yearMonth: '2016-04',
    salary: 880
  },
  {
    yearMonth: '2016-03',
    salary: 880
  },
  {
    yearMonth: '2016-02',
    salary: 880
  },
  {
    yearMonth: '2016-01',
    salary: 880
  },
  {
    yearMonth: '2015-12',
    salary: 788
  },
  {
    yearMonth: '2015-11',
    salary: 788
  },
  {
    yearMonth: '2015-10',
    salary: 788
  },
  {
    yearMonth: '2015-09',
    salary: 788
  },
  {
    yearMonth: '2015-08',
    salary: 788
  },
  {
    yearMonth: '2015-07',
    salary: 788
  },
  {
    yearMonth: '2015-06',
    salary: 788
  },
  {
    yearMonth: '2015-05',
    salary: 788
  },
  {
    yearMonth: '2015-04',
    salary: 788
  },
  {
    yearMonth: '2015-03',
    salary: 788
  },
  {
    yearMonth: '2015-02',
    salary: 788
  },
  {
    yearMonth: '2015-01',
    salary: 788
  },
  {
    yearMonth: '2014-12',
    salary: 724
  },
  {
    yearMonth: '2014-11',
    salary: 724
  },
  {
    yearMonth: '2014-10',
    salary: 724
  },
  {
    yearMonth: '2014-09',
    salary: 724
  },
  {
    yearMonth: '2014-08',
    salary: 724
  },
  {
    yearMonth: '2014-07',
    salary: 724
  },
  {
    yearMonth: '2014-06',
    salary: 724
  },
  {
    yearMonth: '2014-05',
    salary: 724
  },
  {
    yearMonth: '2014-04',
    salary: 724
  },
  {
    yearMonth: '2014-03',
    salary: 724
  },
  {
    yearMonth: '2014-02',
    salary: 724
  },
  {
    yearMonth: '2014-01',
    salary: 724
  },
  {
    yearMonth: '2013-12',
    salary: 678
  },
  {
    yearMonth: '2013-11',
    salary: 678
  },
  {
    yearMonth: '2013-10',
    salary: 678
  },
  {
    yearMonth: '2013-09',
    salary: 678
  },
  {
    yearMonth: '2013-08',
    salary: 678
  },
  {
    yearMonth: '2013-07',
    salary: 678
  },
  {
    yearMonth: '2013-06',
    salary: 678
  },
  {
    yearMonth: '2013-05',
    salary: 678
  },
  {
    yearMonth: '2013-04',
    salary: 678
  },
  {
    yearMonth: '2013-03',
    salary: 678
  },
  {
    yearMonth: '2013-02',
    salary: 678
  },
  {
    yearMonth: '2013-01',
    salary: 678
  },
  {
    yearMonth: '2012-12',
    salary: 622
  },
  {
    yearMonth: '2012-11',
    salary: 622
  },
  {
    yearMonth: '2012-10',
    salary: 622
  },
  {
    yearMonth: '2012-09',
    salary: 622
  },
  {
    yearMonth: '2012-08',
    salary: 622
  },
  {
    yearMonth: '2012-07',
    salary: 622
  },
  {
    yearMonth: '2012-06',
    salary: 622
  },
  {
    yearMonth: '2012-05',
    salary: 622
  },
  {
    yearMonth: '2012-04',
    salary: 622
  },
  {
    yearMonth: '2012-03',
    salary: 622
  },
  {
    yearMonth: '2012-02',
    salary: 622
  },
  {
    yearMonth: '2012-01',
    salary: 622
  },
  {
    yearMonth: '2011-12',
    salary: 545
  },
  {
    yearMonth: '2011-11',
    salary: 545
  },
  {
    yearMonth: '2011-10',
    salary: 545
  },
  {
    yearMonth: '2011-09',
    salary: 545
  },
  {
    yearMonth: '2011-08',
    salary: 545
  },
  {
    yearMonth: '2011-07',
    salary: 545
  },
  {
    yearMonth: '2011-06',
    salary: 545
  },
  {
    yearMonth: '2011-05',
    salary: 545
  },
  {
    yearMonth: '2011-04',
    salary: 545
  },
  {
    yearMonth: '2011-03',
    salary: 545
  },
  {
    yearMonth: '2011-02',
    salary: 540
  },
  {
    yearMonth: '2011-01',
    salary: 540
  },
  {
    yearMonth: '2010-12',
    salary: 510
  },
  {
    yearMonth: '2010-11',
    salary: 510
  },
  {
    yearMonth: '2010-10',
    salary: 510
  },
  {
    yearMonth: '2010-09',
    salary: 510
  },
  {
    yearMonth: '2010-08',
    salary: 510
  },
  {
    yearMonth: '2010-07',
    salary: 510
  },
  {
    yearMonth: '2010-06',
    salary: 510
  },
  {
    yearMonth: '2010-05',
    salary: 510
  },
  {
    yearMonth: '2010-04',
    salary: 510
  },
  {
    yearMonth: '2010-03',
    salary: 510
  },
  {
    yearMonth: '2010-02',
    salary: 510
  },
  {
    yearMonth: '2010-01',
    salary: 510
  },
  {
    yearMonth: '2009-12',
    salary: 465
  },
  {
    yearMonth: '2009-11',
    salary: 465
  },
  {
    yearMonth: '2009-10',
    salary: 465
  },
  {
    yearMonth: '2009-09',
    salary: 465
  },
  {
    yearMonth: '2009-08',
    salary: 465
  },
  {
    yearMonth: '2009-07',
    salary: 465
  },
  {
    yearMonth: '2009-06',
    salary: 465
  },
  {
    yearMonth: '2009-05',
    salary: 465
  },
  {
    yearMonth: '2009-04',
    salary: 465
  },
  {
    yearMonth: '2009-03',
    salary: 465
  },
  {
    yearMonth: '2009-02',
    salary: 465
  },
  {
    yearMonth: '2009-01',
    salary: 415
  },
  {
    yearMonth: '2008-12',
    salary: 415
  },
  {
    yearMonth: '2008-11',
    salary: 415
  },
  {
    yearMonth: '2008-10',
    salary: 415
  },
  {
    yearMonth: '2008-09',
    salary: 415
  },
  {
    yearMonth: '2008-08',
    salary: 415
  },
  {
    yearMonth: '2008-07',
    salary: 415
  },
  {
    yearMonth: '2008-06',
    salary: 415
  },
  {
    yearMonth: '2008-05',
    salary: 415
  },
  {
    yearMonth: '2008-04',
    salary: 415
  },
  {
    yearMonth: '2008-03',
    salary: 415
  },
  {
    yearMonth: '2008-02',
    salary: 380
  },
  {
    yearMonth: '2008-01',
    salary: 380
  },
  {
    yearMonth: '2007-12',
    salary: 380
  },
  {
    yearMonth: '2007-11',
    salary: 380
  },
  {
    yearMonth: '2007-10',
    salary: 380
  },
  {
    yearMonth: '2007-09',
    salary: 380
  },
  {
    yearMonth: '2007-08',
    salary: 380
  },
  {
    yearMonth: '2007-07',
    salary: 380
  },
  {
    yearMonth: '2007-06',
    salary: 380
  },
  {
    yearMonth: '2007-05',
    salary: 380
  },
  {
    yearMonth: '2007-04',
    salary: 380
  },
  {
    yearMonth: '2007-03',
    salary: 350
  },
  {
    yearMonth: '2007-02',
    salary: 350
  },
  {
    yearMonth: '2007-01',
    salary: 350
  },
  {
    yearMonth: '2006-12',
    salary: 350
  },
  {
    yearMonth: '2006-11',
    salary: 350
  },
  {
    yearMonth: '2006-10',
    salary: 350
  },
  {
    yearMonth: '2006-09',
    salary: 350
  },
  {
    yearMonth: '2006-08',
    salary: 350
  },
  {
    yearMonth: '2006-07',
    salary: 350
  },
  {
    yearMonth: '2006-06',
    salary: 350
  },
  {
    yearMonth: '2006-05',
    salary: 350
  },
  {
    yearMonth: '2006-04',
    salary: 350
  },
  {
    yearMonth: '2006-03',
    salary: 300
  },
  {
    yearMonth: '2006-02',
    salary: 300
  },
  {
    yearMonth: '2006-01',
    salary: 300
  },
  {
    yearMonth: '2005-12',
    salary: 300
  },
  {
    yearMonth: '2005-11',
    salary: 300
  },
  {
    yearMonth: '2005-10',
    salary: 300
  },
  {
    yearMonth: '2005-09',
    salary: 300
  },
  {
    yearMonth: '2005-08',
    salary: 300
  },
  {
    yearMonth: '2005-07',
    salary: 300
  },
  {
    yearMonth: '2005-06',
    salary: 300
  },
  {
    yearMonth: '2005-05',
    salary: 300
  },
  {
    yearMonth: '2005-04',
    salary: 260
  },
  {
    yearMonth: '2005-03',
    salary: 260
  },
  {
    yearMonth: '2005-02',
    salary: 260
  },
  {
    yearMonth: '2005-01',
    salary: 260
  },
  {
    yearMonth: '2004-12',
    salary: 260
  },
  {
    yearMonth: '2004-11',
    salary: 260
  },
  {
    yearMonth: '2004-10',
    salary: 260
  },
  {
    yearMonth: '2004-09',
    salary: 260
  },
  {
    yearMonth: '2004-08',
    salary: 260
  },
  {
    yearMonth: '2004-07',
    salary: 260
  },
  {
    yearMonth: '2004-06',
    salary: 260
  },
  {
    yearMonth: '2004-05',
    salary: 260
  },
  {
    yearMonth: '2004-04',
    salary: 240
  },
  {
    yearMonth: '2004-03',
    salary: 240
  },
  {
    yearMonth: '2004-02',
    salary: 240
  },
  {
    yearMonth: '2004-01',
    salary: 240
  },
  {
    yearMonth: '2003-12',
    salary: 240
  },
  {
    yearMonth: '2003-11',
    salary: 240
  },
  {
    yearMonth: '2003-10',
    salary: 240
  },
  {
    yearMonth: '2003-09',
    salary: 240
  },
  {
    yearMonth: '2003-08',
    salary: 240
  },
  {
    yearMonth: '2003-07',
    salary: 240
  },
  {
    yearMonth: '2003-06',
    salary: 240
  },
  {
    yearMonth: '2003-05',
    salary: 240
  },
  {
    yearMonth: '2003-04',
    salary: 240
  },
  {
    yearMonth: '2003-03',
    salary: 200
  },
  {
    yearMonth: '2003-02',
    salary: 200
  },
  {
    yearMonth: '2003-01',
    salary: 200
  },
  {
    yearMonth: '2002-12',
    salary: 200
  },
  {
    yearMonth: '2002-11',
    salary: 200
  },
  {
    yearMonth: '2002-10',
    salary: 200
  },
  {
    yearMonth: '2002-09',
    salary: 200
  },
  {
    yearMonth: '2002-08',
    salary: 200
  },
  {
    yearMonth: '2002-07',
    salary: 200
  },
  {
    yearMonth: '2002-06',
    salary: 200
  },
  {
    yearMonth: '2002-05',
    salary: 200
  },
  {
    yearMonth: '2002-04',
    salary: 200
  },
  {
    yearMonth: '2002-03',
    salary: 180
  },
  {
    yearMonth: '2002-02',
    salary: 180
  },
  {
    yearMonth: '2002-01',
    salary: 180
  },
  {
    yearMonth: '2001-12',
    salary: 180
  },
  {
    yearMonth: '2001-11',
    salary: 180
  },
  {
    yearMonth: '2001-10',
    salary: 180
  },
  {
    yearMonth: '2001-09',
    salary: 180
  },
  {
    yearMonth: '2001-08',
    salary: 180
  },
  {
    yearMonth: '2001-07',
    salary: 180
  },
  {
    yearMonth: '2001-06',
    salary: 180
  },
  {
    yearMonth: '2001-05',
    salary: 180
  },
  {
    yearMonth: '2001-04',
    salary: 180
  },
  {
    yearMonth: '2001-03',
    salary: 151
  },
  {
    yearMonth: '2001-02',
    salary: 151
  },
  {
    yearMonth: '2001-01',
    salary: 151
  },
  {
    yearMonth: '2000-12',
    salary: 151
  },
  {
    yearMonth: '2000-11',
    salary: 151
  },
  {
    yearMonth: '2000-10',
    salary: 151
  },
  {
    yearMonth: '2000-09',
    salary: 151
  },
  {
    yearMonth: '2000-08',
    salary: 151
  },
  {
    yearMonth: '2000-07',
    salary: 151
  },
  {
    yearMonth: '2000-06',
    salary: 151
  },
  {
    yearMonth: '2000-05',
    salary: 151
  },
  {
    yearMonth: '2000-04',
    salary: 151
  },
  {
    yearMonth: '2000-03',
    salary: 136
  },
  {
    yearMonth: '2000-02',
    salary: 136
  },
  {
    yearMonth: '2000-01',
    salary: 136
  },
  {
    yearMonth: '1999-12',
    salary: 136
  },
  {
    yearMonth: '1999-11',
    salary: 136
  },
  {
    yearMonth: '1999-10',
    salary: 136
  },
  {
    yearMonth: '1999-09',
    salary: 136
  },
  {
    yearMonth: '1999-08',
    salary: 136
  },
  {
    yearMonth: '1999-07',
    salary: 136
  },
  {
    yearMonth: '1999-06',
    salary: 136
  },
  {
    yearMonth: '1999-05',
    salary: 136
  },
  {
    yearMonth: '1999-04',
    salary: 130
  },
  {
    yearMonth: '1999-03',
    salary: 130
  },
  {
    yearMonth: '1999-02',
    salary: 130
  },
  {
    yearMonth: '1999-01',
    salary: 130
  },
  {
    yearMonth: '1998-12',
    salary: 130
  },
  {
    yearMonth: '1998-11',
    salary: 130
  },
  {
    yearMonth: '1998-10',
    salary: 130
  },
  {
    yearMonth: '1998-09',
    salary: 130
  },
  {
    yearMonth: '1998-08',
    salary: 130
  },
  {
    yearMonth: '1998-07',
    salary: 130
  },
  {
    yearMonth: '1998-06',
    salary: 130
  },
  {
    yearMonth: '1998-05',
    salary: 130
  },
  {
    yearMonth: '1998-04',
    salary: 120
  },
  {
    yearMonth: '1998-03',
    salary: 120
  },
  {
    yearMonth: '1998-02',
    salary: 120
  },
  {
    yearMonth: '1998-01',
    salary: 120
  },
  {
    yearMonth: '1997-12',
    salary: 120
  },
  {
    yearMonth: '1997-11',
    salary: 120
  },
  {
    yearMonth: '1997-10',
    salary: 120
  },
  {
    yearMonth: '1997-09',
    salary: 120
  },
  {
    yearMonth: '1997-08',
    salary: 120
  },
  {
    yearMonth: '1997-07',
    salary: 120
  },
  {
    yearMonth: '1997-06',
    salary: 120
  },
  {
    yearMonth: '1997-05',
    salary: 120
  },
  {
    yearMonth: '1997-04',
    salary: 112
  },
  {
    yearMonth: '1997-03',
    salary: 112
  },
  {
    yearMonth: '1997-02',
    salary: 112
  },
  {
    yearMonth: '1997-01',
    salary: 112
  },
  {
    yearMonth: '1996-12',
    salary: 112
  },
  {
    yearMonth: '1996-11',
    salary: 112
  },
  {
    yearMonth: '1996-10',
    salary: 112
  },
  {
    yearMonth: '1996-09',
    salary: 112
  },
  {
    yearMonth: '1996-08',
    salary: 112
  },
  {
    yearMonth: '1996-07',
    salary: 112
  },
  {
    yearMonth: '1996-06',
    salary: 112
  },
  {
    yearMonth: '1996-05',
    salary: 112
  },
  {
    yearMonth: '1996-04',
    salary: 100
  },
  {
    yearMonth: '1996-03',
    salary: 100
  },
  {
    yearMonth: '1996-02',
    salary: 100
  },
  {
    yearMonth: '1996-01',
    salary: 100
  },
  {
    yearMonth: '1995-12',
    salary: 100
  },
  {
    yearMonth: '1995-11',
    salary: 100
  },
  {
    yearMonth: '1995-10',
    salary: 100
  },
  {
    yearMonth: '1995-09',
    salary: 100
  },
  {
    yearMonth: '1995-08',
    salary: 100
  },
  {
    yearMonth: '1995-07',
    salary: 100
  },
  {
    yearMonth: '1995-06',
    salary: 100
  },
  {
    yearMonth: '1995-05',
    salary: 100
  },
  {
    yearMonth: '1995-04',
    salary: 70
  },
  {
    yearMonth: '1995-03',
    salary: 70
  },
  {
    yearMonth: '1995-02',
    salary: 70
  },
  {
    yearMonth: '1995-01',
    salary: 70
  },
  {
    yearMonth: '1994-12',
    salary: 70
  },
  {
    yearMonth: '1994-11',
    salary: 70
  },
  {
    yearMonth: '1994-10',
    salary: 70
  },
  {
    yearMonth: '1994-09',
    salary: 70
  }
]
