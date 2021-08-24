FROM node:15.3.0

WORKDIR /app
COPY . .
RUN yarn

CMD ["/bin/bash"]