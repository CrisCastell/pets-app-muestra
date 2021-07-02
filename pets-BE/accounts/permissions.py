from rest_framework import permissions

class IsAssigned(permissions.BasePermission): 
    
    def has_object_permission(self, request, view, obj):
		# check if user who launched request is object owner
        if request.method in ["GET", "HEAD", "OPTIONS"]:
            return True
         
        elif obj == request.user: 
            return True
        else:
            return False

class IsPrivate(permissions.BasePermission): 
    
    def has_object_permission(self, request, view, obj):
		# check if user who launched request is object owner 
        if obj == request.user: 
            return True
        else:
            return False