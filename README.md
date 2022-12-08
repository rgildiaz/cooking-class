# cooking-class
IS 446 Group Project website

If you just want to run the site, use the instructions in [the Backend section](#backend).


## Frontend
The frontend is built using React (and create-react-app). As a prerequisite, you will need to have [Node.js]() installed.

If you don't have Node.js installed, you can still view the site through [the backend](#backend).

To run:
```bash
$ cd frontend
$ npm start
```

### Making changes
If you make a change to the frontend which you would like to see reflected through the backend site, run the following command from within the ``frontend`` directory:
```bash
$ npm run build
```

This will build the React site, which Django will be able to read.

## Backend
The backend is built using Django. To view the site, you may first need to install the python packages necessary. To do so, run the following commands from the main folder (called "cooking-class"):
```bash
$ python3 -m venv venv
$ pip install -r requirements.txt
```

Once you have the necessary packages installed, run:
```bash
$ python3 manage.py runserver
```

Django pulls from the React build files (located at ``./frontend/build``), so there is no need to run both the frontend and backend servers at the same time.

**Note**: the Django secret key is _secret_, stored in a git-ignored file, ``secret.py``. If you have this file, place it in the root directory (``./cooking-class/``). Without it, the Django server will not run.