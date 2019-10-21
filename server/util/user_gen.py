import random
import string
import docker

def randomString(stringLength=10):
    """Generate a random string of fixed length """
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))

def user_gen():
    userid = "User"+randomString(28)
    return userid

def start_container(userid): 
    docker.from_env().containers.run("user-container", detach=True, name=userid)
    
    return ["./lib/docker", "exec", "-it", userid, "bash"]


