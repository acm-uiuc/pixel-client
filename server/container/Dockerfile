# Use an official Python runtime as a parent image
FROM python:3-slim

# Set the working directory to /app
WORKDIR /user
RUN apt-get update
RUN apt-get -y install gcc vim nodejs
RUN pip install psutil requests

# Copy the current directory contents into the container at /app
COPY . /user

# Make port 80 available to the world outside this container
EXPOSE 80

CMD ["python", "./.util/container.py"]
