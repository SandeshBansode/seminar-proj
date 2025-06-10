// Sample property data matching the target page
const properties = [
  {
    id: 1,
    bhk: "2BHK",
    title: "Spacious 2BHK in Cidco",
    locality: "Cidco",
    city: "Aurangabad",
    price: 15000,
    priceText: "₹15,000/month",
    area: 950,
    beds: 2,
    baths: 2,
    amenities: ["Parking", "WiFi", "Power Backup"],
    furnishing: "Semi-Furnished",
    image: "", // No image URL, placeholder used
  },
  {
    id: 2,
    bhk: "3BHK",
    title: "Modern 3BHK Near Prozone Mall",
    locality: "Chikalthana",
    city: "Aurangabad",
    price: 25000,
    priceText: "₹25,000/month",
    area: 1200,
    beds: 3,
    baths: 3,
    amenities: ["Parking", "WiFi", "Power Backup", "Water Supply"],
    furnishing: "Fully Furnished",
    image: "",
  },
  {
    id: 3,
    bhk: "1BHK",
    title: "Affordable 1BHK in Garkheda",
    locality: "Garkheda",
    city: "Aurangabad",
    price: 8000,
    priceText: "₹8,000/month",
    area: 600,
    beds: 1,
    baths: 1,
    amenities: ["Parking"],
    furnishing: "Unfurnished",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUWGBcYFxgYFxcfGBUYHSAYGhcYGBUdHSggGh0lIhgXITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUvLS0rLS8tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYHAf/EAEcQAAIBAgQDBQQHBAkCBgMAAAECEQADBBIhMQUGQRMiUWGBMnGRoRQjQlJyscEHkrLRFSQzU2JzguHwQ8IWg6LD0vFjk7P/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QALREAAgICAQMDAwMEAwAAAAAAAAECEQMhEgQxQRMiUUJhcRRSgQUykaEzYvD/2gAMAwEAAhEDEQA/AMhFe0qVegozCpUqVSiWKlSpRUoqxUq9y16FqUSxs0qeFpwSrKbI4r2KlCU4JVFciALXuSrAt1YsYQsYAJPgNTUbSK5MH5Kms4N22HrRzDcNAOo1B1nofdRrCcOkTFKlkSKcn4Mta4R460PvW4YjwJFdJThPlWG4lYi7cHg7j5mlvI2SDb7gzLXuSpmSmxTI5fkY0RZKWWrAWp7OBZ9RAHjTddwbB5FJVJ2o0nDVG+v5VKLQGwAoXIsEW8Ex8qjxOGZD3h69KM7bVFek6nX00oJZVHbDSb7AG5eA8T6V5avhvf4GitzFKNzVvCYNrozIAw94n4Uj9TG7c1Qz05ftYEpVoG4He/u/hFVr/DWT2ky++BTo58cuzAcJLugRSoq3DWAk22jxgx8aGXVgkU2M1LsCNpUqVESxUqVKoSxUoqQJXoSroAjAr2KmCU7JVUSyHLTslShKeLdQqyEJXoSpxbp2SqKsgCU8JTx4DU0YwPLV+5qRkX/Fv0nT1oJZIxLpsCRVzA8Mu3j9WhPnsPia1h4DZwyhmXtWJIGbYRlO23j8aIWMHir4GVciePsL8dz86TLNavwFwAWG5btW4OIu66dxN+m59fLaidnGhB2eHshZEbS53Gw9/ntV9eFYe0M124bpgnLb0XQTq/WpX40tolLKLbAJBygFiB9KGrf+Sp9TrWaWW/uFxoF4rg18I166uUTJzEZmJIGi+o8KIcDtZkUSBM77bmqeMvs6uWYk97c+WEP61e4EvcU+Z/M1HJuGy49wwuHZdxp47j4isPzByvf7S5dRe0VmZoX2hJJjL19JrU4XGOhEEgdyddIIwQM+jt8an/8AEdkDv+1A9jxjXTbeRS4TkuyC9r7nJLtogkEEEbgiCPeKhK10DjvEUxAK9ivkx9se4jb50ItYQLsAv509zjFXLRSg26iA7GCYjaPfpRLD2sixvvT8TiAvVR5lh+W/wn3V5h7iuoYHMNRMEDT0E++BTI9RGekVLDKG2iG/dA1JAHmaH/0lbLQDPuGg9aL8h8DtYq/fN+2buQ91SzQNeoB1o5zXgkt8MsBLKp37JJVQCe4256zSX1D5cRnpe3kZfLXvMHEptMhzKQdiIkAlSQdiJB28KdaXSq3M99LlplQy63ACuzDv4knQ6/aX94UvrFaQzppU2ZNrldU5RxVi5hbVu4IKqcrbEGPst09dK5Y2HKkqwhhuDuOu1aXhGMVUVSQIEb1xerxc4o6GGSb2bziNq4LYgn2RsPakDeNfgag4JwBc4e4Zb7IJkr5ZtM498xQnD8z3QxtlM9uAFZILAZRuoOoB6imcH4wXxlks/cDbDbY9K62DePiqWjDlaU9jOc+MXC5sL3UHh13GvwrJla0PNSTfdgDGusGNz1oMbVdXp1FY1xMc5Ny2VStLLVjs6abdPAshy0qm7OlUJZIEpwt1ZFqni1Q2DZWFuni3VoWqcLVQqyqLVPW3Vrs6cLdQqyldWBNVtTRHFp3fhVNUpE3sOHYOcj2wcSJHQ/k1dLOHBnT735iuV8FxjWbmdVDGDodtQRr8av4vmG7cnPeyjXu29PQkfzNY8sbldjoujT8yMs21DAkMSRIkTlGo9DWl5ieAnp/Ha/nXMOG3FLaeXXeujczXl7gnYa/vW2H8Jpc1aii09MyT4gG3vrkPx7MfzHxpX8KGuMBIl3GnTvcRGnwAqvi+ztLLkBRAlttkG3+geO9DBzVbLZUDuTtAgEyTAG+7E7dTV0o92Wt+DQ4rClbTtIj3j7Qwo/NHHpUnCb9wW8toZmPSJI1OoFCvpOKe2S1g27MwSwhiQdPag7xsKLcuXHBXsxLCYHjvNG9QKXclHLmIeDc7u25BI9ldhoNAvotengCoFJliRP8AsBWp4LxUX1bSGSAw6TrtWe5g4hda92dqYy6BVlz5ggTGorFl6z09P/CH4un9TsZvmnEthradmB3iROUeE6HQH4GsnZxGJxDAIr3CeiKf029TRTnTCX7dq1duggXGOUs0s0iQd9NPGtRyjxMWOHYRybY1v+2zCTmjQKDP/wBVn/5Hylo2RksUajv7nMHeTHWtDwP+yH4m/Oq+F4ZbW6pIN1O8XiQCegUnpRhVUABUCAdAZ16mfPetvSYnGXIzdTmU415Gcn8ZfBPfIsNcLmB3gqjWZJP6VPxLieJxNpLN021tpkhUU5iVEAsxP5CKjAqJ8UgMF1nwkVs9KN2ZHJ1R6tqmY201zRmCgRAUADQk/rNTFqKYnCW0sswktlJEnQGJ6UOecIK5Kw8MZSdRZmrnB7bMWJYsdzP+1ef0QgG7/H/aoGxz6yxHwFdD5QwuHu4a2biqzx3mO599czJ12BK5QNsulyw7SM5wXHHDBgiq2bcvJPu0I0qUccui6lxQiKkjs0UBWmJnczpv0rdHhOCI0sg+6RPzob/Qtl5P0YWx077lj5xMCtcMmFK1GjJKM27bA2M5uZ0ZOyUZgR7R6iPCsa9mtXxnD2LRyqpLe8wPeaAPbmt/T1VpUZ8unQPa3TDbogbVRtarSmKso9nSq32VKrJyJxbpy26sBK9yUFlEIt07s6mC07LVWUQZK9y1cwuDZz3em5JgD1q9b4faX23LHwQf9x3oXNIJRbAdzCs4yqJNWcNwDq7ei/zNGMVhezPaLaa0hkDOSfM6kDpVG/jgBmOYiQJjQE7bxSZTUtjUnFUX8Fg8Ettlu2y50ywWzefekAdKGNwO0zyi3MvQMwPzAFaTls2+8XRXIIgkTFU+d+IXO0spaJTMI7umpaAM24G3WsOfMsberZpw4Xk8lF8KtsALlBnUD9TvXvNnEXUd1oPiN/jVe5wa5hmAuMrM86LJjKxXcgTqD0q1zbgGKyB4j403FJyhFy77F5YqMnx7GaxfCg+CxOJd2d7bW1XUZYZkBkaknvHrVLkQ5cdYbwf+Y/WrmGNxcJdw2QHtXRi0nTKytAEa+zvXmC4SyENmgjwkEe4jWs+SMnkSodja4N2dJ5mxiNYZQwzZzpOp7+sCgnLOMCYi3mIA725gDQ9aC27YX3nr1qzh18N+lbHBRhxM8ZW7DnLfFwPpbA5JhlzR3jDEDX0Hr0qnZ4oot5nzduwYEr7IB6b+QqC3wx26ge8/yrzH4JLIHaPEzG2sbx8ax5FgUuTe0acccj9qRled+M3byW7RQrattKSZI7uWCf8A6qPlziw7NbN28AqE9mGEKobV+8B1PjNR8x4lCgCSZbr5VX4NypisTBS2ApyQzsAvfLBT1MSrdOlKjkXLlEdLHS4yNti8Gtu2LhuI66ewZ3ocLwbUaCsbhbhTMBp4xW+4xwtMOy20LEG2jksZOZhJ1gaU7pcmSeV8noDqIY44lS2R8lcAt467eF97pW2wARWhSDO+k9BsRRHmfl/D2eGWrlu0q3Ge1mfUsZDT3jJ9Nqo8hcet4R8Qbi3GLkZQiEkwW66Abjc1Lx/jr4nC28MtgoqFCXdxPdnQIAfHeelOam8n2M9riCrZotxJj2LfhP5ULCxRnjBTs8qupJWNDMSPKj6mLlGki8ElGVnP2G9aXl7HFEQBoI/39aH2+EtGsfE0+3wx1iCPjXHydJklGuLOmuognfI6VwbiIdcsEFVSSYhpG4g+MjWDpVU8Yd8Rbtr3UzqD4tqN/AUC4fxJrawULHKq+0Ok9d+tU34hf7QXFtopBBGuYiPgK6WDFUfcvBzc0rftfkJ8yJ9e3r+ZoSbVVcY2JvMzO8EyRHU+EKKvWlIAB3rfik6UTLkj9VkRsUw2KtxXhWnWJKXY0quZa9qWQYFr0JUoSn2xBmKGyxiYYmrg4a6qbjKwVdSSNBRjgfExnW2LKgsYkb/lr8as81cVVsJi7YDZktPMjToNDPmKx5s+SOkjVjxQdbMff41bGxze/QfCqmL4/cQ5f7M6aBcra66n2to60M4rcsoLAthZhGY5yWLFVLAmYABnSNKp8exva4ln7pk2/ZaR7KjRoGvj51y8zyTVyl/g6mKWOH9sf5Z03mnN2RDNPQA/h8z50L5hxVs4LDWVdTcGSVUgkQXmQNt6M8wCREaFhv8AhrP9lbTTur4DQfKnf0yPLp42/LMPVOsjLPDuJpZORgxZyMoA9DJ6bih/MnG7ZdWKsptxow3Ktm6TANF+FcMa+SA4UDeZ+QFR8y4VbX1TMGLJK92fEbelF1aim22F07l2SAdjmO5jLrO6qoT2Qs7MzuZJOu8dK0l7EYrE6Lb7p+6sDy7zfzrnHAreIN0Lhyc58Co0BiTm0iSPjWj4lexdv6OcQ4757uUmY+rMNECYYbedMwZdKNb+Qc+Km3f8BrifArtiy167lVVjN3gSJIAmPMioeWcThb15bLLcZm2hgFHvET860P7UXjh+K/Fh/wCO3XLeRuJ27GLS7dbKi6kwSfQDU0Ms+WTpMkccKs6nzhgrVjA3blq2qMrKoI39sKdT5GuWrxS5M5ia1/N3PFnEYa5h7SXO+852gAAOH2mekVz8GmU1H3AJ70azh3MTAd47etWcOycTvKgu9gtpGZ2ImQSoAGog/GsYX0NWOWCD21sz9YijTydWP5fOsjxpzSNMMjUWw1zVyxYtWbJs3WuXXbv5yoUDKT3RA6jxO1E+WeZEspbt5SzKLAmYUZGvEkmCYOcDQGhv/h8Rma22Uay5IA+MCiHD0w4XKzWYMZRpGn+KI+dNlCOPvJfgGLnk8NnPrzanz/Wtta4tcxQFy6FDABBlBAyroNydaz3MvDlt3gLQ7pUHQyJkjQ+golwNStqGEHMavpGvU0X1CfDaCyU5hUnKPBXx1y8pvm0toroqAlsxYaMTp7Pgd6s8y8r2rGBXEB7r3S6iWfQAkgwAB4VteaPKjHwdWDGq7jOFtbXMzKdJhfdMbUKRpFaTmLAWxZu3AuVhbzSpIzH6r2gNG3bedzQ9RklBLiHijFvZlLnF8uyz/q/kKkPE3jMLRIInRtfhFZm5dY7mtfwSyexU/wCD9TXGy9Zmxq+R1IdNhm6o13BeVvpFi3eFwpnWcpSSPKZFXDyMf78fuf70W5bxirYtIQwIUa5Tl1JA7wkDUEaxTOJ8ZdcQllQAC1sE7khiJHlvW3FmzTSp+LOfkhCMmZrH8vCz7V9fLumT6TQg2x01rS83L9YvuP50ByV0MDbjybuzJle6SK+WlkqxkrzJT7F0QZKVWMlKoUMC16FqULXuWqsKi1y+v9ZtfiFUuc8VdQ41VRSjoysxOo1EgL46CiXAR/WLf4v0NT824kXMNjl7JAUQwwHePeAEnxrH1D2/waMK7fkwXCcbgrYVsiswHeDKZOmplgRQnHWu0vdrZsuLRZYhDlGwOo0GoNLjOHtoLItgSyIW1kyVUn3ak0Y4Dxa/atC0qqRJBMFjqxJGUQOp6mudkbZujSWkbTmzS23jJ1/0ihfHMBbTA4Z1QB2ayWaNST2k6+nyqXHcQbESGtG2PNtToBt0iKqthZC52dwvshmYhfCFJgeg60/oMU1ginruZuomnkYS4LdKyR41av8ANeGtOxuXBmGQQAS2gvBoEeLLrtUfAsNmV/Ij8qF3uEguc/ZBtWhmXMR4hd+lMypSyO2kXBPiqRm+W8V2JN9FzZUiDPVk1+Xzr3j/ABNrwsliJQMAFUjLpbAMknMTl8oozwTmm3h3J7NmBXKRKjLqDtrO1C+c+LWr722tBgAGzAgDUxtBNKwzisqSdjcsJcOTRn+LYm5cUtcdnOmrMT186o4K0xYGDGtbnmfk5cPgb183mdk7CBlCj6xlBkSToDWe5CCXMfhrToGVmdWDQVYFWMFY1Gm1MyZIudrwJhF8dlc2zrptv+dMW0TGhg+ArrvO2Gt2uG3sltEAuBYUAadpl6CuVJcGmkxl67x46TTpZOcbAUaZWNpvAxIG3nFUQrg6AgjqNOsb0eQSpMagaa76kxFb/CcKwVtFudjbCqbeZnEhZ+iMSWYaf9Qz+KsUtyNEfbG/k5knGcUQEN24ykDusZ+Z1+dbrh37PrjrYZr6ot0AwqElRlLakkDpHrWF49cXtrpAlDdfKQwggMxVlIERB/KuvYTjtoYXDOt+xltIucs4GVshVgTO4zbUlxi3bHvJOMeMWc75n4MLF97KszhCvebQmVVthpoSR6V5wpYtx5n9Kucdxlq5cN4X7QLkSqq7HMQu8aTsY93jUmG4XfW52Is37jTqxtFEE6+0dIGmvnTejmlkvx+AM8+WOr2F/wBmnF7GHuYo37qWw2SMxiYNyYHXpUnN3MmGv4EYey7PczqdEcLAYz3iANj0oEuBudrdtutmyyHKGuXBFy4QzC2CBocqljOwgka0hg1Erex2FsEFtVyvoANlLZjLFgDAEJP2hGp8OXKzJuqIrS6V7zJxRAGyXLwzAB1zBkOiyIf2fZGixt76yHEOMXGduzuOLeY5BMHL0kqBrRvCY1Mil3SSBMlZJ0+dMk45VXYi9rsE23UkTMeNaHhXH0S2FHQRqR/OhHHsYj24VwdRoKrcM5WxeIti7aslrZJGbMoGhIOhM9PCud1GDEl7paNcM812R1ThvNqrZAlNBbj0dm+9vVfiHMivfW9A0KmPwwfGuX4rlrE2/ata9AGQsfcgJY/CrNrkvHMmdcMzCY7pQmfNQdPWmY5KCXFiZ+520dH4jx/6Q6wsQCPn76eUrk3E+B4jDgNfsPbDGAWEAneBXUuCicNYPjatn/0itnTz8GfLHyT5K8KVPlpZa1WJor5KVWMtKpZKIMtIipglJlqWFQLwdzFA5iUtkHuxqR5++q2L4fnzG/iXOfcZgo3mpmQnD272d8xv9mRmOUr3DsPxH5U5BbC4vOs3GCi0chYzDTlMafZrM+LTffwP5PsBMfwSxhntXYYrOxggyNCPUg70ewbI5trYgm50YZYMgAaTvM0axtxLdvD5hmPZkQMpIMWvEiOtB+HYhmxfai2zC21uVBQkQto6nNGwOxrJjlKMtdtj8lOPbeiDF33R7ttgoa2FMqSR3hPXwqfjeCNrDWbwuuWuNakd0ABu0kQAJ9habxHCs169dcpaFwLAd1kZVgk6x0J3qhxjmC09q3bfE2SiZCotKzE5c0d4MQR3zt5Vrc3rf5MvHuaHgF8hW94/Ks/zwM1xG8E/U1XwPGDcnsLgVR7WZDJPSOkU7j+CxToe9bcREnQgb+FZOpg5Ss19PNRVBH9ofC7NrsVw9pV793MEEmAEy5tzG+9YvG2yFWQQYO/pRbkVrltrpQBnbKIEMdJOyn86l4rxKyt6+uMw927eJTKqHshbWAx13lp+7PnrpWPG4zU/AM8tw4F3nDnO3iMJdsLauA3Ox7zZRGQqT3QTvlrFcv4q5ZxFu7ZE3EJZRBboQSVG4gmtHwvEhgVt8Pw5XMSO3cvG5EmMzQCAZJBgaCiVxsazBlfDYYqYHYWIOuQzJMnYDfaRsaY0m7SFqVKmDOK8a4hiLL9oXNjW4w7NVQd6ZLQD7WwJ1Ogmh/CbWdCdNToT0qfm+5iVtAXcVcuq7kMsKiEiHkouhMmdaHWUv2rRh1AUFvZBPjvTOS+rt9gfwGbeAEHMzSdogQf1q7fylMmQhCVLBWYZiuWCQZE90mY0zGgvLVu5iQ7XL91QpAhGCzO8wNa0eG4FbBEG4dOt1z4eBqri9qJfJ+WZPjJshEQswKs7QFklW270geXpQTCOBcVsi3ApBytMHwDQQY2rbc28NhLbBAzFoJYEsRlOmY61jcKYuR4kD5ilceKsNzb7nRGxPEsQqy+HsIxFwBLYJ7pDLOYGdcpiegp1jhuLy5Hx94qFyQoAOXuzDGSDoNd6t8MdsiL3To32jmifCP1ojculnBIVQpmFXfRd/Has0c1xbsY406MbguUe0ZmuFri5gO8xzHUCS2msUfwvJthWWLCxrM5m8PGa8w/GlUuUYwW0A2IEaz0qRuPsxXfWZJYkdOlJeWfkNQRzvnGwExt9FUKFZQABAHcQ7UGJo1zkZxt4+JT+BKBtWyO4oS9MfmrqP7OuOJawgttvmuMNDqJBOo9+1cqFdP8A2eWLRwkuNczifKR4Gaw/1FL0afyh/T7mUOLYk/TWZJytlB8xGYa+WprccH5gXIzZpLFCQEIC6awBOpCmfw1nuOW07R2+yTvmMScvnvI2q9wfKFKsxAzD7bSJkE/+o/8AAKb0qxuK5fAvP6rbSWij+2a+rWrGUzluuG30bL/vV7lwf1TD/wCVb/hFU/2xMhw2HZGzqbzahs2uVpEzptt0ojywv9Tw/wDk2/4RXS6WklXwZZrwXMtLLU+WllrVYuiDLSqfLXtSyUV1FUeM8Ut4ZA9yYJyjKJJME7ehq3gcNBuNmc5nOjNKrBI7o6Vm/wBpo/q9r/NH8L0MpUrCUbY/hvELF20rZwlpbncF++qQ3dlxbWZHmfumhvHebmtvks9hdWFl17QqGO6gkLMeMa6e6m8FwFvsrFzKqkvBbx9v3+XwqrzbZRVXJEm4SfgdfnWW5LY6kFcJiLN3LIDOVzFVzneM2g2AMVn+IG7ZxjqoKqjoTaZnCtopAdZkzHzqXlnGN9JQDWUyehdJqxzg08WvydDcSf3FoJSvdBL4Dn03EPeZbQw+Hy949jYUkyBMs+47x3HU0P49wTtEuYi9euXbiI0EhFWEUkAKq6AUfwYRTdKNGdQDB106EzQ/j2IAwZQA6rcUb/cbr8KUpMvRlODWnVMyvlzeQn4kaVseS3N+69rEXWNtLTH7Ek5oEtlnasNgbxCKKNcDvFFvPr7AkgdM1yfypknZSOlYflPhNokrZtmAurs77k/eY1zTnNLS8TvC2qi2FSAogewm1dAxF7LYRyD/AGaHffSda5dzVfzY24wAEhNvwrQwk+WypL2mo4Hj7SWnfKNHA6zJyjy8aOLiQ2um46dSBWV4TYU4Z9W1upOgESU6yaIXb4QlQTownvbaDQ6U2UpXozqKSAfPbtlRSdO0Zo88oE0PxV89kw/wn8ql5tvhltmdczTrJ2qmGzowXU5ToN9qG3Q6PYJ/s/Al52n9DW0xWICwBO3p0rE8nslrP2rBJIgNEnQ1pcTxjDrDdpIMjQDfTTc1aftK8mf5rxJK24+9+hrK2z3wf8QPzo/zFxO1cChMxgzM+RHhWczQfWqttUHRu+E4l+3tgkAEHUnyPhRzC3GcYmXHd0EA6dz3Vzy1x51dWCju7Akx1H61Pa5rvr2gUWx2ntSCemXTveFZFgkhzyWGuG4cZD3mMH7ojp1miK2AMujHUxrEVibXG76jKrADfYU1+NYg/wDVb0gfkKjwyZOaJeZFH0pwJ/6e5k+wkyaoYu1DEDam3brO2ZiWY9Tv4Ci2H4ZeGVkYAzIO0aVp4uqQptAc2iBMV0Lku2jYIoXysWuDcbGBtIrN8WwV51zXHNxhEaSY8PnNBTgn+4fhSc3TyyR4vTsZjy8JWjdY7gQAM3iWWMuijUxJEN4T06VJhOBtd0+kMskDWYj35x4/KsD9Bf7h+FL6E/3D8KKGGlT2SWSTdpnR/wBpvDksYO0i3A5N/Mx03yMNBOg0FHuUx/UsP/lJ+VccGDuaDIx8BB3rt3JGAf6Nh7bKVIQZwRqvjPn/ADrThqGhEt7Zby0stTYxQjMPAmPSaF8R4qtllVhM7mQAPM1psBl7LSoZ/wCILXRX/dNKpZRa4bcV0zo2ZWZiDESJPST51lv2pD6iz/m/9rVr+H2WBcl5Uu+VYHd7zT3tzPyodzhy99LshQxUoS4gTmMERuI3oHdUEu5heAYwi0qlgBn6kbZX/wBqqc045GCKpViGJMEHoKvtyA6qWckKNySgA6dT51atfs7JUPPdI0PaW/PoNaTKPyxiejPcr4u2l8PcIChdydjmQ9ASTAOlSc0cSt3MfevISyMylTG4CqNjWhw/BcMGCBULQfvH2QSZkb6Vet8nYe6BcN2ymbxL7+EbdOlBUf3Ilv4ZnsNzZbQGFuGfwAfnVTinNXaWhbCEaMCWadGEGK2y8hYcSWvWhl3+rJ/Wok5cwXS+G1I0sgdYmS3r61Shjj9Rfufg5vgHc6BSw8ga02Etxh30bM/dyZW9nM0mY09o1qruBwNmJu3CDvlVf8MaevyqtxtsPZYBSTKKwzuokHN0geA69fKo1je+T/gnu+BvFOOOQtuwGNrs1Vg6gSyzGpExWF4xh79y8zlNTG0RoAP0rZcDx9h3+tAy+TEH4zR0tgZWLPdgklmfvDUKB3hB0nXpVp4l5ZKk/g5QMLiYy98A6xnge+Jpp4VeO/zaurXbmFTs2+jIwZS0ZXb7Vxekx7I+NQ4jiChiFwCCdvqCYGvXLM7D4xNF6mP7lcJHMBwW54qPU/yopwvhht97PDERoARHrW14VxK4IfsDHSLIyT4SRG+mlXcTzDjXm2mHRNBJVIIknxbwFT1Mfx/sri/kwp4EranOf+eQq1b5bJECxdI/C8flRDDPiLzZkBeD4gfmR4UYs4viWXuSoyke2ntLI6nTXUx6USyL9qI19zNPwMpvZK+9SPzoY/AFY6DfpnE/CZo9xfD4xiWufeyxnG8T+tDeCcOuYkuLZXuRmzE9ZiND4GqeT/qiKK+SbC8hXnAItDWYzXEExvpmmrWJ/Z9ctCbi2l99yjeG4TjNba3EQBVGhbaWI6ePyJFQ4nlzFXQVe+vdIUnv+yADlA6L3vedPCpzl8Int+TMXuCImWezOaYiehIO48qM8E5St3xIvWbf4hv7tap3uFF8ls3QvZ9oJykyRcfUajwqb+hVVspvZ9A0hADJPr4f8iqU5+CNINXeSrFsEti7cidFTWRuIzdKz3E7tuyYBLakdBqInx8RVrH29ULXrjEkAmV1jMQfZ9PCNKFcU4bb7NrgLyq6ar02mFk7xM9Kt5MnyTjEfg+J2WYLczKCQJkQPMkiAK1mB4JgbkBr1228AsjdlmQnNo0SJ7j7E+ydayHJvB7WIN43XZBbUEEOq+0cpBJUz4RWublm2rIO2vkM8H62dIZpjs95HzNA8mT5DUIk1zgHDgQpxbAsJHsa+sR1oPxLD4FP7K+1w/6R+nmPjVzH8tYaTlvX20AMsukaiPq9Nz8aEYfl232aXO0bvLMNlI2BPTbb90eFK9fI/Iz0Y/Ad5OTDXc2VHDqAZOUiDMZfhWwsMbcZXUSe9IJYjyANYb9m0driAJIASCeuprX8Q9kjxn7UH07wpXV5pLEvuTHjTnXwAeM8Zlme2zMpbRXTLJB+y+hjzrN8Sus0l2DMR4n0323ireCXPaZSrKtsmYgi0TtqGkmdQB4UOxuPDBWI0AkHWToSQR1PWevpXRxyuKM01UmiFbwgfzNKqy8NBElDJ1PeG/WlR2DR1jBMpBAIPefYj7zVZy1wrgvFmw+ItupYj6osB9oZVkeutdV4VzE97OwTKggqxVu8I9/jNKWSww3jMCt621t5ysBMGDoQdD6VVt8s2FYEB58S7dQwO3/Nqj/prKpY5SI6TJGm1T4TigbeDBUdRuG8fSsPUNuemOx9iLD8p4ZFNxbbdoEbU3LhiQQdC0dTU1rlzDAf2IiUiWdt4ncmKWM4q4txGh0JnoVPTr0qpiscyrv1TTvRpHnSFbdWMfayNsFa+lPbKIVBjUzGgPjNR8VwNsJbFu0uY3o0UCVAuEifDu/KqGGZjfZxGrtIgxMR8dKlxGIdlWSAO0LAiQdc4I1O0MdKLG6dNgzQ4YYArmtKPrXE5RBgPp59PlVfjl0C9sIy2tMogbaDSrPDUvMFgwouuwzTvDiQPWvOIrcF8SCQBbDEKSG9mNJ6aVp79hRJgLwN+YEdjtA3zirFrESEhZ77dPN6qYYObzEwCbbaspURnUjunX51ftJdRbeogO7GNpOfpPnUTothbCqGnMJmwP4r1Mx6ILoAiSqnfpJ8v1qhirt5NIlux1A/FcI09fnVHF3rq3JIghNJHTppS3G5MJMfw8gYK1qNX/8Ac1GlS2CBcY6HS3/30F4WjDDJC6Z9P35qzbxFztSIGoUfDPVxWgWR8n24sT4nTz1atBgrXcnT2n/ias5wC6yqVkgKxgQDGpmJmjWDx86doQO9plB3ZvEVqFMr8Yw3cYmY7Qx5nII+dZr9mSHNifw2/wA3o1x/HQukuouDNm7MR3faAjfyodyfZyNeg5QVE+zqBMe1p1NQi8mtW2c7Qeidfx03AvBuSJ+s/wC23UVu+c5bOMuVdQbcn2/ShGC4kHzlXYZnY6hJiEjpoasEz/E7kXTH373/APR6rnFHP/pH5mp+Joc40nvXPTvE9KdawBMtoIXwJJ16a0N0aY7RSx172fxfo1V8W82mHlVvE2zp3Bv5+B869s2M0jIB3WP2umvjUl2sru6M8t/s7F5CoYXMgPiMpzAj1Hzre8q8f+kLazrrbuqGIHdcFH28/EVn34QGYDJm3n2tgCfHyrS8GsLatYcAKBo5AB3IMnXc61ItOIO1IO4rEYRixRcpAJ8JNBeFYcXrSKASwttA01ICCPnV7GX7LuMqb+0Yg+lLlqz2bqu/ceD4ibfwPlWat7Nd6BP7Nz9diNIEL6a1p+MID+NQSm8/dMaeBrOfswTM2IeNyR8GoL+0jFXLd62YIIZ2WRp3QBpIgxM/CqnFOMU//aFcqcmiTC3myZTIA0gzMTMNqZih3EFHZsNe40x4qWBE/MehqTl9b72gxtPq2jZD3xvO0H30/jGBuiw9wK4IVpJUxl6jb19K2wdQSM0tys87X/CaVWE4LcgSrT/ltSquRVHPrlwhwQYIFsjX/CvWt9jOfrd1QFw5Royghx+QGorP8L5YNxgbp02CJqzkAaT0Hz929aRP2c3SQRZNsEgZZJI3kySf+GkXSDlBp0yrwnH3CGUe8kmAoMekTWztcIukArfBzeDNGnmNOtRcB4JYw6XmuMqoMqnMQ32Vb55o0q7heK4EEW7N5M2sqobUATMEdPEeFKUpRlaRcYLyULvD7wy/W5gwaO8+kKx29KY/C8R/ebf43/lRgjW0Rqmveggaq8e6ZHvmprpzuRllQVb2hqPdTvXkldf6LUE3VmIu37yk5O0mSDDbmD0J1/OqXCMVdUsz5270RJJDGRDA7e+tTzJgsQzC1YIRLkktOsnSBGwEmn8ucvLhsyue1YZJfoMxcZQDv7IM+QrPkk5p2i+CXYiwa4tkDAsJJgE6jfxrzG376Am5cIEwSWG4g+vStUmIW0ygFozGQdhAbp6RQTFZbpfMpyhttIM5dekwPHwooZp12JwXyZHi/F7jRFwliMusAkSNJI8qkw3MTC0qG4ZBOkDSN+mvhVXmPjD4i41nCWmyAFWJGriQZ19kTHnvVjhvCe0w6kvlvBm9rUCMwKyT4xtVvlLbFuP3DIu424MyZ2BUScq+yZI6eZqO8nEJkpdkiP7NdR8KucG41cthrV5A0adokQIXQQOnnWnXiVsgezoRuRt1pkM7v+1BcNdzCo2PVQBbuZdx9UDrM75fGmnEY4NOR83+Qs9f8HvreNxBAgAKe0PtDxU0wcStm4TnQGANHHiaL9Sl9KJ6f3OeWcVihLILkNrKpoTrroseNL+k8Yv2rg96nxnw860/AeI21w9tTcTQNoXX7zedELPEbcf2lvr9tPEx1o31SX0len9znHE+I3bkdq50MgkRrHWPyobxDjtzLCvlJ6ppI949NPOtpzJeV7bi7iLZBYAKjKTsDJljppWQ5ixGDS6VsqbyAGWUZIbu+ywGoBDdI10q3mU+yoFwaJbGNxy4cFc7pcUtmUsSqKYYkbrrOuxp2E4zcXXuwZCmD3jClxmmCfZ28apYfizKezWC92AbjNlCQNwdiBL775qrnC3Pq7sqqh2dFOoWGtj2tjsJnwoVJp7LpeA+vFTpmS20TEhupk7MKlHE5/6dvw+3H8fkK0PDMfhc1/Pdsj61iJK6jy8qsJi8AXcs9gjux7PgZp6nH4AdmZfH5om2mmv2vd96npi/BEHuzfzrS2rmAZnymydRGikbCelAcc9q5iAtgdogVsxs5cqmFylmIygSDvHWreSPwWrsIcIxOYsWVSQBG/WauXjJmIj31lrPEPo+aXV2iGC+yvvuEb+4etBMZzJdJJRzrsASAB5CSfnQwjGXZUXKzfW7IBnUgSYAEnQ7U3+mbNtlILwwaO6p3y+LADYVhr3MhFgQ2IF/WW7VcgEGCFCZuuxPrQ88VdrYl2LeBAInx2qeim9l85HSOWuN4bB58q3GDTIhREmd8xqDi/FsNdxNu+wuwi3FVctvKwcQZk+Glc9Ti93rlPnlE/GrtjiGYAMI11Ij5Cr/AEkJaB9SSdm15d5hs4S0LAW6wDsyFivdXXKgk7AHr/tVjmPme3d4biVUMrBQCpiSCdSIJkDrWa4dwvt9Ld1CR0OVW+DEE+lTYrgrglXOsEGV3BkHrr7/ACoZwjFV2JGbbOuWr4yj3ClXHBhcUNBjb2n4v/lXlZthcmY3C8Tv2yDbu3EImCrsCJidQfIVZfmLGnfF4gz/APmuf/KvKVNottsHm4YiTHhOnwrxGIIIJBGoI6HypUqlEsmGOu9Ltwf+Y+nu1r0cQvf313/9j/zr2lUBGnG3d+1ufvt/OvDi7n94/wC+38/OlSqqIL6Q/wB9v3j/ADrw33+837xpUquiHgc+J+JryT415SqEPQxpRSpVCCyjwFeiPClSqEscDXtKlUog4NXualSqEHXLsqARqCCD16yD/wA6CnWcZEzJBUgeROv50qVRkHWbwLAFso8T0rWcvLhWbJ2ZchS2aSS8bqtuNTvpA2OtKlTIJcGy62kRYzjzKSEtrbAMRJJ9V9n5UFxPFMx1KKdJCqigxtIUAGlSrVGSjFaAa2U8QocbmPfp8Kjt2gKVKmuMXuiIkkeFehl8B8KVKqTouj3tKTYlRuYpUqqeVxWgasct0N1BFXb/ABBggE+ydI00Pu8/zNKlS8vujbLWmVf6Sf7x+JpUqVYqCP/Z",
  },
  {
    id: 4,
    bhk: "4BHK",
    title: "Luxury 4BHK in Jalna Road",
    locality: "Jalna Road",
    city: "Aurangabad",
    price: 35000,
    priceText: "₹35,000/month",
    area: 1800,
    beds: 4,
    baths: 4,
    amenities: ["Parking", "WiFi", "Power Backup", "Water Supply"],
    furnishing: "Fully Furnished",
    image: "",
  },
  {
    id: 5,
    bhk: "2BHK",
    title: "Cozy 2BHK in Osmanpura",
    locality: "Osmanpura",
    city: "Aurangabad",
    price: 12000,
    priceText: "₹12,000/month",
    area: 800,
    beds: 2,
    baths: 2,
    amenities: ["WiFi", "Water Supply"],
    furnishing: "Semi-Furnished",
    image: "",
  },
  {
    id: 6,
    bhk: "3BHK",
    title: "Premium 3BHK in Beed Bypass",
    locality: "Beed Bypass",
    city: "Aurangabad",
    price: 22000,
    priceText: "₹22,000/month",
    area: 1100,
    beds: 3,
    baths: 2,
    amenities: ["Parking", "WiFi", "Power Backup"],
    furnishing: "Fully Furnished",
    image: "",
  },
];

// DOM elements
const priceRange = document.getElementById("price-range");
const priceRangeValue = document.getElementById("price-range-value");
const propertyType = document.getElementById("property-type");
const locality = document.getElementById("locality");
const furnishing = document.getElementById("furnishing");
const amenityCheckboxes = Array.from(document.querySelectorAll(".amenities-group input[type='checkbox']"));
const clearFiltersBtn = document.getElementById("clear-filters");
const propertyList = document.getElementById("property-list");
const propertiesFound = document.getElementById("properties-found");
const sortPrice = document.getElementById("sort-price");

// Update price range label
priceRangeValue.textContent = `₹${Number(priceRange.value).toLocaleString()}`;
priceRange.addEventListener("input", () => {
  priceRangeValue.textContent = `₹${Number(priceRange.value).toLocaleString()}`;
  filterAndRenderProperties();
});

// Clear all filters
clearFiltersBtn.addEventListener("click", () => {
  priceRange.value = 50000;
  priceRangeValue.textContent = `₹50,000`;
  propertyType.value = "";
  locality.value = "";
  furnishing.value = "";
  amenityCheckboxes.forEach(cb => cb.checked = false);
  sortPrice.value = "low-high";
  filterAndRenderProperties();
});

// Add event listeners to filters
[propertyType, locality, furnishing, sortPrice].forEach(el => {
  el.addEventListener("change", filterAndRenderProperties);
});
amenityCheckboxes.forEach(cb => cb.addEventListener("change", filterAndRenderProperties));

// Filter and render properties
function filterAndRenderProperties() {
  let filtered = properties.filter(p => {
    // Price filter
    if (p.price > Number(priceRange.value)) return false;

    // Property type filter
    if (propertyType.value && p.bhk !== propertyType.value) return false;

    // Locality filter
    if (locality.value && p.locality !== locality.value) return false;

    // Furnishing filter
    if (furnishing.value && p.furnishing !== furnishing.value) return false;

    // Amenities filter
    const selectedAmenities = amenityCheckboxes.filter(cb => cb.checked).map(cb => cb.value);
    for (const amenity of selectedAmenities) {
      if (!p.amenities.includes(amenity)) return false;
    }

    return true;
  });

  // Sort
  if (sortPrice.value === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProperties(filtered);
}

// Render properties
function renderProperties(propertiesToRender) {
  propertyList.innerHTML = "";
  propertiesFound.textContent = `${propertiesToRender.length} Properties Found`;

  if (propertiesToRender.length === 0) {
    propertyList.innerHTML = "<p>No properties found matching the filters.</p>";
    return;
  }

  propertiesToRender.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";

    // Image placeholder SVG
    const imagePlaceholder = `
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    `;

    card.innerHTML = `
      <div class="image-container">
        <div class="bhk-label">${p.bhk}</div>
        <div class="favorite-icon" title="Add to favorites" role="button" tabindex="0" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
            <path d="M20.8 4.6c-1.4-1.4-3.7-1.4-5.1 0l-1.7 1.7-1.7-1.7c-1.4-1.4-3.7-1.4-5.1 0-1.4 1.4-1.4 3.7 0 5.1l1.7 1.7 5.1 5.1 5.1-5.1 1.7-1.7c1.4-1.4 1.4-3.7 0-5.1z"></path>
          </svg>
        </div>
        ${p.image ? `<img src="${p.image}" alt="${p.title}" />` : imagePlaceholder}
      </div>
      <div class="property-content">
        <div class="property-title">${p.title}</div>
        <div class="property-location" title="${p.locality}, ${p.city}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin" viewBox="0 0 24 24"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${p.locality}, ${p.city}
        </div>
        <div class="price-area-row" style="display:flex; justify-content: space-between; align-items: center; margin-top: 0.25rem;">
          <div class="price">${p.priceText}</div>
          <div class="area">${p.area} sq ft</div>
        </div>
        <div class="details-row">
          <div title="${p.beds} Bed" style="display:flex; align-items:center; gap:0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3z"></path></svg>
            ${p.beds} Bed
          </div>
          <div title="${p.baths} Bath" style="display:flex; align-items:center; gap:0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shower" viewBox="0 0 24 24"><path d="M3 16h18M12 3v13"></path><path d="M8 21h.01M12 21h.01M16 21h.01"></path></svg>
            ${p.baths} Bath
          </div>
        </div>
        <div class="amenities">
          ${p.amenities.map(a => `
            <div class="amenity-badge" title="${a}">
              ${getAmenityIcon(a)}
              ${a}
            </div>
          `).join('')}
        </div>
        <div class="furnishing">Furnishing: ${p.furnishing}</div>
        <div class="button-row">
          <button class="btn-contact">Contact Owner</button>
          <button class="btn-details">View Details</button>
        </div>
      </div>
    `;

    // Favorite icon toggle
    const favIcon = card.querySelector(".favorite-icon");
    favIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      favIcon.classList.toggle("favorited");
    });

    // Contact Owner button click
    const contactBtn = card.querySelector(".btn-contact");
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Contact Owner for: ${p.title}\nPhone: +91-1234567890\nEmail: owner@example.com`);
    });

    // View Details button click
    const detailsBtn = card.querySelector(".btn-details");
    detailsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Details for: ${p.title}\nLocation: ${p.locality}, ${p.city}\nPrice: ${p.priceText}\nArea: ${p.area} sq ft\nBeds: ${p.beds}\nBaths: ${p.baths}\nFurnishing: ${p.furnishing}\nAmenities: ${p.amenities.join(", ")}`);
    });

    propertyList.appendChild(card);
  });
}

// Helper to get SVG icon for amenities
function getAmenityIcon(name) {
  switch(name) {
    case "Parking":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" viewBox="0 0 24 24" style="width:14px; height:14px;"><circle cx="12" cy="12" r="10"/></svg>`;
    case "WiFi":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi" viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/></svg>`;
    case "Power Backup":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap" viewBox="0 0 24 24" style="width:14px; height:14px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    case "Water Supply":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet" viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
    default:
      return "";
  }
}

// Initial render
filterAndRenderProperties();
