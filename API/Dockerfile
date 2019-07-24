FROM golang

# if left blank app will run with dev settings
# to build production image run:
# $ docker build ./api --build-args app_env=production

# ARG app_directory=/app

# it is okay to leave user/GoDoRP as long as you do not want to share code with other libraries
# WORKDIR ${app_directory}

WORKDIR /app
COPY . .

# added vendor services will need to be included here
# RUN go get ./vendor/database

RUN go get github.com/gin-gonic/gin
RUN go get github.com/joho/godotenv
RUN go get gopkg.in/mgo.v2
RUN go get github.com/gin-contrib/cors
# RUN go get github.com/pilu/fresh
RUN go build -o main


# if dev setting will use pilu/fresh for code reloading via docker-compose volume sharing with local machine
# if production setting will build binary
# CMD if [ ${APP_ENV} = production ]; \
# 	then \
# 	api; \
# 	else \
# 	go get github.com/pilu/fresh && \
# 	fresh; \
# 	fi

CMD ["./main"]
	
# EXPOSE 8000