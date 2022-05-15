from mysql import connector
import os
import pickle as pkl
import numpy as np
import tensorflow as tf

db = connector.connect(
    host='localhost',
    user='root',
    passwd='Mihirmayuresh123!',
    database='crime_db'
)
mycursor = db.cursor(buffered=True)


def create_criminals_table():
    mycursor.execute('CREATE TABLE criminals (id int PRIMARY KEY AUTO_INCREMENT,name varchar(255) NOT NULL,age int,'
                     'crime_details text,reward int, descrip text,img text)')

    db.commit()


def populate_the_table():
    imgs = os.listdir('E:\MEIP\criminals')
    names = ['alex', 'dan', 'max', 'vladimir']
    age = [20, 35, 32, 18]
    crime_details = ['Domestic + Money Laundering', 'Trafficking', 'Trafficking + Drugs', 'Terrorist']
    reward = [5000, 6000, 658, 6565]
    desc = ["""white male, approximately six feet tall with a medium build. His
complexion was fair and he wore a moustache. He looked young, perhaps between 20 and
25 years of age. He was wearing dirty blue jeans, a white, short-sleeve tee shirt with a logo
on the back, and athletic shoes. He wore a tattered, black baseball cap, and his hair, blonde
in color, hung out the back of the cap to about shoulder length. He ran out of the store with
a brown bag in his left hand. As he ran, he carried his right arm across his chest as if it
were in a sling. A driver was waiting for him at the far edge of the store's parking lot in a
dilapidated pickup, a dark blue Dodge""", """It all happened pretty quickly, but I got a good look at him. I was a little shocked at first,
and then I was a little frightened. I was only there to buy some milk and then it happened.
The robber was dressed like a kid except older. He had a moustache or maybe a beard. He
had long hair and wore a hat. He wasn't too tall, but he looked big. He ran from the store.
The guy got in a pickup and drove away. He wasn't too old because he dressed like a kid in
jeans and a shirt. He was a bum""",
            """It all happened pretty quickly, but I got a good look at him. I was a little shocked at first,
                             and then I was a little frightened. I was only there to buy some milk and then it happened.
                             The robber was dressed like a kid except older. He had a moustache or maybe a beard. He
                             had long hair and wore a hat. He wasn't too tall, but he looked big. He ran from the store.
                             The guy got in a pickup and drove away. He wasn't too old because he dressed like a kid in
                             jeans and a shirt. He was a bum"""
        , """It all happened pretty quickly, but I got a good look at him. I was a little shocked at first,
                 and then I was a little frightened. I was only there to buy some milk and then it happened.
                 The robber was dressed like a kid except older. He had a moustache or maybe a beard. He
                 had long hair and wore a hat. He wasn't too tall, but he looked big. He ran from the store.
                 The guy got in a pickup and drove away. He wasn't too old because he dressed like a kid in
                 jeans and a shirt. He was a bum"""]

    for img in range(len(imgs)):
        mycursor.execute('INSERT INTO criminals (name,age,crime_details,reward,descrip,img) VALUES(%s, %s, %s, %s, '
                         '%s, %s)',
                         (names[img], age[img], crime_details[img],
                          reward[img], desc[img], imgs[img]))
        db.commit()


# populate_the_table()
# create_criminals_table()


# pickle_in = open('../assets/criminal_hash', 'rb')
# c_db1 = pkl.load(pickle_in)
# pickle_in.close()
# # print(len(c_db1.keys()))
# # c_db1 = {}
# # c_db1[0] = np.random.randint(0, 6, (160, 160, 3))
#
#
# with open('../assets/criminal_hash', 'wb') as f:
#     pkl.dump(c_db1, f)
#     f.close()

def populate_dict():
    c_db1 = {}

    for _id, img in enumerate(os.listdir('E:\MEIP\criminals')):
        img_name = f'E:\MEIP\criminals\{img}'

        temp = tf.image.decode_image(tf.io.read_file(img_name)).numpy()
        c_db1[_id] = temp

    with open('../assets/criminal_hash', 'wb') as f:
        pkl.dump(c_db1, f)
        f.close()

populate_dict()
pickle_in = open('../assets/criminal_hash', 'rb')
c_db1 = pkl.load(pickle_in)
pickle_in.close()
print(len(c_db1.keys()))

